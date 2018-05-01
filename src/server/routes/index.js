import express from 'express'

var router = express.Router()
router.get('/', function(req, res, next){
  res.render('index', { title: 'Hello express'})
})

router.get('/user', function (req, res, next) {
    res.send("Hello world")
})

export default router
