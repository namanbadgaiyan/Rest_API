require('dotenv').config({path: './.env'});
const express = require('express');
const app = express();
const indexRouter = require('./routes/indexRoutes');





// mongodb connection
require('./models/connect').mongoconnection();




// setting logger
app.use(require('morgan')('tiny'));
// bodyparaser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//routes
app.use('/api/user', indexRouter)

//all  handaling code
app.all("*", (req, res, next) => {
    res.status(404).json({url: req.url,messsage: 'page not found'});
})






//creating server -- must be at the last
app.listen(process.env.PORT, ()=>{
    console.log(`server started on port ${process.env.PORT}`);
})