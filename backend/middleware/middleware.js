// import multer from 'multer';
const multer = require('multer');

export const checkRoleUser = (req, res, next) => {
    if (req.user.role === ADMIN) {
        next();
    }
    else {
        res.status(403).send("You are not allowed to access");
    }
}


let storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file , callback) => {
        callback(null, new Date().toISOString + file.originalname);
    }
})

function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
}

export const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1000000
    },
    fileFilter: (req, file, callback) => {
        checkFileType(file, callback);
    }
}).array('img', 4);