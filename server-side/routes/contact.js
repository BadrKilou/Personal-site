const express = require('express');
const {check, validationResult, matchedData} = require('express-validator');
const User = require('../models/mongoose')
const router = express.Router()






router.get('/contact', (req, res) => { 
    res.render('contact',{
        data: {},
        errors: {}
    })
})


router.post('/contact', 
[
   check('email')
   .isLength({ min: 7 })
   .withMessage('Email is Required')
   .isEmail()
   .normalizeEmail()
   .trim()
   .bail(),
   check('name')
   .isLength({ min: 4 })
   .withMessage('Name is Required')
   .trim(),
   check('request')
   .isLength({ min: 5 })
   .withMessage('Request is required')
   .trim(),
   check('message')
   .isLength({ min: 5 })
   .withMessage('Message is required')
   .trim()
], (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.render('contact', {
            data: req.body,
            errors: errors.mapped()
        })
    }
    
    const userData = new User({
        email: req.body.email,
        name: req.body.name,
        request: req.body.request,
        message: req.body.message,
        
    })
    const data = matchedData(req)
    userData.save()
    .then((user) => {
        req.flash('success', 'Your message has been sent successfuly')
        res.render('success')
        console.log(data);
    }).catch((err) => {
        console.log(err);
    })
     
})


 
// router.post('/contact', (req, res) => {
//      res.render('contact', {
//          data: req.body,
//          errors: {
//              message: {
//                  msg: 'Message is Required !'
//              },
//              request: {
//                  msg: 'request is required !'
//              }
//          }
//      })

// })

module.exports = router;

