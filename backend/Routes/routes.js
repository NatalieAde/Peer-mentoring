const express = require('express');
const router = express.Router();
const signUpTemplate = require('../Models/SignUpModels');
const UserSession = require('../Models/UserSessionModel');
const bcrypt = require('bcrypt');

router.post('/signup', async (request, response) =>{
   
    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)
   
    const signedUpUser = new signUpTemplate({
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        studentNo: request.body.studentNo,
        email: request.body.email,
        password: securePassword,
        course: request.body.course,
        yearOfStudy: request.body.yearOfStudy,
        placement: request.body.placement,
        summary: request.body.summary,
        experience: request.body.experience,
        interests: request.body.interests,
        gender: request.body.gender,
        age: request.body.age,
        ethnicity: request.body.ethnicity,
        nationality: request.body.nationality,
        disability: request.body.dissability,
        residency: request.body.residency,
        role: request.body.role,
        numOfMentees: request.body.numOfMentees,
        imageURL: request.body.imageURL,
        trained: request.body.trained,
        applicationStatus: request.body.applicationStatus,
        matchingCriteria: request.body.matchingCriteria
    })

    signedUpUser.save()
        .then(data =>{
            response.json(data)
        })
        .catch(error =>{
            response.json(error)
        })
});

router.post('/signin', async(request, response) =>{
    const { body } = request;
    const {
        password
        
    } = body;
    const {
        email
    } = body
 
    if (!email) {
        return response.send({
            success: false,
            message: 'Error: Email cannot be blank'
        });
    }

    if (!password) {
     return response.send({
         success: false,
         message: 'Error: Password cannot be blank'
     });
     }
 
     email = email.toLowerCase();

     signUpTemplate.find({
         email: email
        }, (err, signedUpUser) => {
            if (err) {
                return response.send({
                    success: false,
                    message: 'Error: Server error'
                });
            }
            
            const userSession = new UserSession();
            userSession.userId = signUpTemplate._id;
            userSession.save((err, doc) => {
                if (err) {
                    return response.send({
                        success: false,
                        message: 'Error: Server error'
                    });
                }
                return response.send({
                    success: true,
                    messave: 'Valid sign in',
                    token: doc._id
                });
            });
     })
        
 });

router.get('/verify', async(request, response) => {
    const { query } = request;
    const { token } = query;

    UserSession.find({
        _id: token,
        // isDeleted: false
    }, (err, sessions) => {
        if (err) {
            return response.send({
                success: false,
                message: 'Error: server error'
            });
        }

        if (sessions.length != 1) {
            return response.send({
                success: false,
                message: 'Invalid'
            });
        } else {
            return response.send({
                success: true,
                message: 'Valid'
            })
        }
    }
    )
});

router.get('/logout', async(request, response) => {
    const { query } = request;
    const { token } = query;

    UserSession.findOneAndUpdate({
        _id: token,
        isDeleted: false
    }, {
        $set:{isDeleted: true}
    }, null, (err, sessions) => {
        if (err) {
            return response.send({
                success: false,
                message: 'Error: server error'
            });
        }
            return response.send({
                success: true,
                message: 'Valid'
            });
        });
    });

module.exports = router;