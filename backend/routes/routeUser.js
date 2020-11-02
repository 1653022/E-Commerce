const {USER} = require('./constant')
const router = require('express').Router();
let User = require('../models/modelUser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/register', async(req, res) =>{

    const {email} =  req.body
    //Checking if user is already in the database
    const emailExist = await User.findOne({email});
    if(emailExist) return res.status(400).send('Email already exists');

    //Hash passwords
    const salt = await bcrypt.genSalt(5);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
        username: req.body.username, 
        email: req.body.email, 
        password: hashedPassword,
        role: USER
    });
    console.log({
        username: req.body.username, 
        email: req.body.email, 
        password: hashedPassword,
        role: USER
    });
    try{
        const saveUser = await newUser.save();
        res.send(saveUser);
    }catch (err){
        res.status(400).send(err);
    }
});

router.post('/login', async(req, res) =>{
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send('Email is not found !');

    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Invalid password !');

    //Create and assign a token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    // res.header('auth-token', token).send(token);
    res.status(200).json({token, user:req.body.email, message: 'Login success'});
    
});

// const createToken = user => {
//     return jwt.sign({_id: user._id, role: user.role}, process.env.TOKEN_SECRET, {
//         expiresIn: new Date().setDate(new Date().getDate() + 1),
//         subject: 'app_token',
//         issuer: 'nguyenhai'
//     });
// }

// router.post('/login', async(req, res) => {
//     const user = await User.findOne({email: req.body.email});
//     if(!user) return res.status(400).send('Email is not found !');

//     const validPass = await bcrypt.compare(req.body.password, user.password);
//     if(!validPass) return res.status(400).send('Invalid password !');
    
//     const token = createToken(req.user);
//     res.status(200).json({token, user:req.user, message: 'Login success'});
//     res.send('Logged in !');
    
// })

router.route('/:id').get((req, res) =>{
    User.findById(req.params.id)
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete/:id').delete((req, res) =>{
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted !'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
