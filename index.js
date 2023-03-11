// Copyright (c) 2023 Yağız Işkırık
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const express = require('express')
const app = express()

const indexTemplate = require('./routers/index')

app.set("view engine", "ejs")
app.listen(9497, () => {
  console.log("Web server alive!")
})
app.use(express.static(__dirname))

app.use('/', indexTemplate)
