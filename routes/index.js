var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', (req, res) => {
  const active = { tab1: 'active-link', tab2: '', tab3: '', tab4: '' };
  res.render('home', { title: 'home', active });
});

module.exports = router;
