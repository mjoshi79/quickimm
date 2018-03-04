const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Article = mongoose.model('Article');

module.exports = (app) => {
  app.use('/', router);
};


router.get('/', (req, res, next) => {
  Article.find((err, articles) => {
    if (err) return next(err);
    res.render('welcome', {
      title: 'QuickImm',
      // articles: articles
    });
  });
});

router.get('/year', (req, res, next) => {
  Article.find((err, articles) => {
    if (err) return next(err);
    res.render('year', {
      title: 'Year in school',
      // articles: articles
    });
  });
});
