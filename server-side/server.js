const express = require('express');
const path = require('path')
const mongoose = require('mongoose')
const session = require('express-session')
const flash = require('express-flash')
const app = express();
const Router = require('./routes/contact')

const PORT = process.env.PORT || 3000


// Connect Mongodb

mongoose.connect('mongodb://localhost:27017/PortfolioDB', {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true
}).then((res) => {
    console.log('Connected Successfully to Mongodb');
}).catch((err)=>{
    console.log(err);
})


// BodyParser     
app.use(express.urlencoded({ extended: false }))

app.use(express.static('public'));

// Express Session Middleware
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true }
  }));

 // Connect Flash
app.use(flash())  

// Ejs
app.set('views', './views')
app.set('view engine', 'ejs') 


app.use(Router)


app.get('/', (req, res) => {
    res.render('content')
})






 






app.listen(PORT, () => {
    console.log(`The Server is Running on Port ${PORT}`);
})

