'use strict'

// const {db} = require('./server/db')
const app = require('./server')
const PORT = process.env.PORT || 1337


app.listen(PORT, () => console.log(`studiously serving silly sounds on port ${PORT}`))

