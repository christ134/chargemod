var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome' });
});
router.get('/super',(req,res)=>{
  res.render('super', { title: 'For'});
});
router.get('/app',(req,res)=>{
  res.render('app', { title: 'About'});
});
router.get('/subs',(req,res)=>{
  res.render('subs', { title: 'Hello'});
});
router.get('/grid',(req,res)=>{
  res.render('grid', { title: 'Form'});
});
router.get('/expo',(req,res)=>{
  res.render('expo', { title: 'Form'});
});
router.get('/join',(req,res)=>{
  res.render('join', { title: 'Form'});
});


module.exports = router;
