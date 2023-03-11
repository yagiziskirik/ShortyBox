// Copyright (c) 2023 Yağız Işkırık
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const router = require('express').Router()
const path = require('path')
const bodyParser = require('body-parser').urlencoded({ extended: true })
const robot = require('robotjs')

const activeTable = {
  GPSOn: "c",
  AutoSteer: "x"
}

router.get('/', (_, res) => {
  res.render(path.join(__dirname, '..') + '/pages/index.ejs')
})

router.post('/', bodyParser, (req, res) => {
  const active = req.body.active
  robot.keyToggle('alt', 'down')
  setTimeout(() => { robot.keyTap(activeTable[active]) }, 20)
  setTimeout(() => { robot.keyToggle('alt', 'up') }, 40)
  res.sendStatus(200)
})

module.exports = router
