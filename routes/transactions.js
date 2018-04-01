const express = require('express')
const router = express.Router()

/* transactions */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Accounts' })
})
router.get('/:id', (req, res, next) => {
  res.render('index', { title: 'Accounts' })
})
router.post('/', (req, res, next) => {
  res.render('index', { title: 'Accounts' })
})
router.put('/:id', (req, res, next) => {
  res.render('index', { title: 'Accounts' })
})
router.delete('/:id', (req, res, next) => {
  res.render('index', { title: 'Accounts' })
})

module.exports = router
