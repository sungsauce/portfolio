const nodemailer = require('nodemailer')
const express = require('express')
const router = express.Router()

router.post('/contact', (req, res, next) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_ACCT,
      pass: process.env.EMAIL_PASS
    }
  })

  const msgBody = `<p><strong>From</strong>: ${
    req.body.name
  }</p><p><strong>Reply-to</strong>: ${
    req.body.email
  }</p><p><strong>Message:</strong></p><div>${req.body.message}</div>`

  const mailOptions = {
    from: process.env.EMAIL_ACCT,
    to: process.env.EMAIL_ACCT,
    subject: `New message from ${req.body.name} RE: portfolio site!`,
    html: msgBody
  }
  // TODO: send a confirmation email to sender?
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      next(error)
    } else {
      res.status(200).send(info.response)
    }
  })
})

module.exports = router
