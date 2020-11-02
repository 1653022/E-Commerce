const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nameCategory: String,
    idClothes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Clothes'}]

});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
