const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    name:{
        type: 'string',
        required: [true, "name is reqired"],
        minLength:[6, "name must be atleast 6 character"],
        trim: true,
    },
    username:{
        type: 'string',
        unique: true,
        required: [true, "username is reqired"],
        minLength:[6, "username must be atleast 6 character"],
        trim: true,
    },
    gender:{
        type: 'string',
        enum: ['male', 'female','other'],
        required: [true, "gender is reqired"],
    },
    email:{
        type: 'string',
        lowercase: true,
        required: [true, "email is reqired"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        trim: true,
    },
    password:{
        type: 'string',
        required: [true, "password is reqired"],
        minLength: [6, "password must be at least 6 characters"],
        maxLength: [15, "password must be below 15 characters"],
        select: false,
    }
})

const user = new mongoose.model('user', userModel);

module.exports = user;