const mongoose = require('mongoose');

const clothesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    category: [String],
    brand: String,
    price: Number,
    sizes:[String],
    colors:[String],
    quantity: Number,
    description: String,
    img:[String]
});

const Clothes = mongoose.model('Clothes', clothesSchema);
module.exports = Clothes;
// export default mongoose.model('Clothes', clothesSchema);