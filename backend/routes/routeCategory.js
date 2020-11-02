const router = require('express').Router();
const Category = require('../models/modelCategory');
const Clothes = require('../models/modelClothes');

router.route('/').get((req, res) => {
    Category.find()
        
        .then(category => res.json(category))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/categories/:cateID').get((req, res) => {
    Clothes.find({category: 'Casual'})
        
        .then(category => res.json(category))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/goingout').get((req, res) => {
    Clothes.find({category: 'Go out'})
        
        .then(category => res.json(category))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;