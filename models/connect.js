const mongoose = require('mongoose')

exports.mongoconnection = async () => {
    try {
        await mongoose.connect(process.env.mongoURL);
        console.log('connection estabalished');
    } catch (error) {
        console.log(error.message);
    }
}