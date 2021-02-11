// const express = require('express');
// const router = express.Router();
// const UserSessionSchema = require('../Models/UserSessionModel');
// const bcrypt = require('bcrypt');

// router.post('/signin', async (request, response) =>{
//    const { body } = request;
//    const {
//        email,
//        password
//    } = body;

//    if (!email) {
//        return response.send({
//            success: false,
//            message: 'Error: Email cannot be blank'
//        });
//    }
//    if (!password) {
//     return response.send({
//         success: false,
//         message: 'Error: Password cannot be blank'
//     });
//     }

//     email = email.toLowerCase();


   
//     // const signedinUser = new UserSessionSchema({
       
// });

// module.exports = router;