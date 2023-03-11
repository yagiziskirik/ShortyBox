// Copyright (c) 2023 Yağız Işkırık
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const express = require('express')
const app = express()

app.set("view engine", "ejs")
app.listen(94971, () => {
  console.log("Web server alive!")
})
app.use(express.static(__dirname))
