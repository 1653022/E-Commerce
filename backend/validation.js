// VALIDATION
const Joi = require('@hapi/joi');
//import Joi from 'joi'

// const schema = Joi.object({ username: Joi.string() .min(6) .required(),
//     email: Joi.string() .min(6) .required() .email(),
//     password: Joi.string() .min(6) .required() });

const registerValidation = (data) =>{
    const schema = Joi.object ({
                    username: Joi.string() .min(6) .require(),
                    email: Joi.string() .min(6) .require() .email(),
                    password: Joi.string() .min(6) .require()
    });
    const validation = schema.validate(data);
    // return Joi.validate(data, schema);
    return validation;
}

const loginValidation = (data) =>{
    const schema = {
        email: Joi.string() 
            .min(6) 
            .require() 
            .email(),
        password: Joi.string() 
                .min(6) 
                .require()
    };
    return Joi.validate(data, schema);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;

