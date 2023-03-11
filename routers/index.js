// Copyright (c) 2023 Yağız Işkırık
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const router = require('express').Router()
const path = require('path')

router.get('/', (_, res) => {
  res.render(path.join(__dirname, '..') + '/pages/index.ejs')
})

module.exports = router
