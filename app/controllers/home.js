const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Page = mongoose.model('Page');
// const Year= mongoose.model('Year');

module.exports = (app) => {
	app.use('/', router);
};


router.get('/', (req, res, next) => {
	Page.find((err) => {
		if (err) return next(err);
		res.render('welcome', {
			title: 'QuickImm',
			question: 'Where are you from?'
		});
	});
});

router.get('/year', (req, res, next) => {
	Page.find((err) => {
		if (err) return next(err);
		res.render('year', {
			title: 'Year in school',
			question: 'What year in school are you in?',
			options: [
			"Prospective Student",
			"Freshman",
			"Sophomore",
			"Junior",
			"Senior"
			]
		});
	});
});

router.get('/upperclass', (req, res, next) => {
	Page.find((err) => {
		if (err) return next(err);
		res.render('upperclass', {
			title: 'Internship',
			question: 'Are you looking for an internship?',
			options:[
			"Yes",
			"No"
			]
		});
	});

	// if ($('#next-bttn').addEventListener("click", function () {
	// 	// body...
	// 	console.log('next is clicked');
	// }));
});