import express from 'express'

var router = express.Router()
router.get('/', function(req, res, next){
  res.render('index', { title: 'Hello express'})
})

export default router
