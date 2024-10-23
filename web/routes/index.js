var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { 
  res.render('home.ejs', {head_title: "Principal"});
});


router.get('/celebraciones', function(req, res, next) {
  res.render("celebraciones", {head_title: "celebraciones"});
});


router.get('/contacta-con-nosotros', function(req, res, next) {
  res.render("contacto", {head_title: "contacto"});
});

router.get('/contact-with-us', function(req, res, next) {
  res.render("contacto", {head_title: "contacto"});
});

router.get('/galeria', function(req, res, next) {
  res.render("galeria", {head_title: "galeria"});
});

router.get('/debug/:category/:id', function(req, res, next) {
  console.log(req.body);
  console.log(req.hostname);
  console.log(req.params);
  console.log(req.query);
  res.send("ok");
});


module.exports = router;