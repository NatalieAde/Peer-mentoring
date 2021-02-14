const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../Models/SignUpModels');
const UserSession = require('../Models/UserSessionModel');
const bcrypt = require('bcrypt');

router.post('/signup', async (request, response) =>{
   
    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)
   
    const user = new User({
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

    user.save()
    .then(user => {
      jwt.sign({
        email: user.email
      }, 'secret', (err, token) => {
        if(err) throw err;
        res.send({
          token,
          user: {
            email: user.email
          }
        });
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({msg: `User ${err.keyValue['email']} already exists. Try Loggin In.`});
    });
});

router.post("/signin", (req, res) => {
    const { email, password } = req.body;
    User.findOne({email})
      .then(user => {
        if(!user) {
          res.status(500).json({msg: "No User with that email: " + email});
          return;
        } else if(!bcrypt.compareSync(password, user.password)) {
          res.status(500).json({msg: "Invalid Password"});
        }
  
        jwt.sign({
          email: user.email
        }, 'secret', (err, token) => {
          if(err) throw err;
          res.send({
            success: true,
            token,
            user: {
              email: user.email
            }
          });
        });
      }).catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  });

  router.get("/:id", (req, res) => {
    UserSession.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
  });


module.exports = router;