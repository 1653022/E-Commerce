const router = require('express').Router();
const mongoose = require('mongoose');
let Clothes = require('../models/modelClothes');
const multer = require('multer');
const Category = require('../models/modelCategory');


let storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file , callback) => {
        callback(null,  Date.now() + file.originalname);
    }
})

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1000000
    },
    fileFilter: fileFilter
}).array('img', 4);

router.route('/clothes').get((req, res) => {
    Clothes.find()
        .then(clothes => res.json(clothes))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/clothes/:id').get((req, res) =>{
    Clothes.findById(req.params.id)
        .then(clothes => res.json(clothes))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.post('/clothes/add_product', (req, res) => {

    upload(req, res, async(err) => {
        try{
                let imgArray = [];
                if (req.files){
                    for (let index = 0; index < req.files.length; index++) {
                        const element = req.files[index];
                        imgArray.push('/uploads/' + element.filename);
                    }
                }
                

                const newClothes = new Clothes({
                    _id: mongoose.Types.ObjectId(),
                    name: req.body.name,
                    category: req.body.category,
                    brand: req.body.brand,
                    price: req.body.price,
                    sizes: req.body.sizes,
                    colors:req.body.colors,
                    quantity: req.body.quantity,
                    description: req.body.description,
                    img: imgArray
                });
                const saveClothes = await newClothes.save();
                
           
                const newCatego = new Category({
                    _id: mongoose.Types.ObjectId(),
                    nameCategory: req.body.category,
                    idClothes: newClothes
                })
                await newCatego.save();

                res.send(saveClothes);
        }catch (err) {
            res.status(400).send(err);
        }
    })
    
     
    
});

router.route('/clothes/delete/:id').delete((req, res) => {
    Clothes.findByIdAndDelete(req.params.id)
        .then(() => res.json('Clothes deleted !'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/clothes/update').put((req, res) => {
    // console.log(req.body);
    req.body.map((ele) => {
        const filter = {_id: ele.product._id};
        const update = {$inc: {quantity: -ele.quantity}};

        Clothes.findOneAndUpdate(filter, update, {new: true, upsert: true, useFindAndModify: false})
        .then(() => res.json('Clothes update !'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
});

// router.route('/clothes/editClothes').put((req, res) => {
//     console.log("edit route get request body")
//     console.log(req.body);
//     // let name = req.body.name;
//     // let price = req.body.price;
//     // let description = req.body.description;
//     // // let brand
//     // // let category
//     // // let sizes
//     // // let colors
//     // req.body.map((ele) => {
//     //     const filter = {_id: ele.product._id};
//     //     const update = {$inc: {quantity: -ele.quantity}};

//     //     Clothes.findOneAndUpdate(filter, update, {new: true, upsert: true, useFindAndModify: false})
//     //     .then(() => res.json('Clothes update !'))
//     //     .catch(err => res.status(400).json('Error: ' + err));
//     // })
// });

// const acceptRoles = (roles) => (req, res, next)  => {
//     const token = req.header.Authorization.

//     return res.status(401).send({mgs:'sdf'})
//     next()
// }

router.put('/clothes/editClothes', (req, res) => {

    upload(req, res, async(err) => {
        try{
            let imgArray = [];
                if (req.files){
                    for (let index = 0; index < req.files.length; index++) {
                        const element = req.files[index];
                        imgArray.push('/uploads/' + element.filename);
                    }
            }
            console.log(req.files);

            const filter = {_id: req.body._id};
            const update = {name: req.body.name,
                            category: req.body.category,
                            brand: req.body.brand,
                            price: req.body.price,
                            sizes: req.body.sizes,
                            colors:req.body.colors,
                            quantity: req.body.quantity,
                            description: req.body.description,
                            img: imgArray,
                            };
                console.log(update);
        }catch (err) {
            res.status(400).send(err);
        }
    })
});



module.exports = router;