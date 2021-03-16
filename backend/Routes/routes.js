const cron = require('node-cron');
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../Models/SignUpModels');
const MatchesModel = require('../Models/MatchesModel');


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
            // user: {
              email: user.email,
              id: user.id
            // }
          });
        });
      }).catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
});

router.put('/updateProfile/:id', (req, res) => {
  const _id = req.params._id;
  const update ={
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    course: req.body.course,
    yearOfStudy: req.body.yearOfStudy,
    placement: req.body.placement,
    summary: req.body.summary,
    // experience: req.body.experience,
    interests: req.body.interests,
    // imageURL: req.body.imageURL,
  };
console.log(update);
  User.findByIdAndUpdate(req.params.id, update, (err, data) =>  {
    if (err) {
      console.log("err", err);
    } else {
      console.log("success");
      console.log(data);
      res.send(data);
    }
  });
  
});

router.get("/getUserDetails/:id", (req,res) => {

      User.findOne({_id:req.params.id}) 
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

const findMatch = async (req, res) => {
  console.log("running every minute");
  const mentees = await User.find({role: "Mentee", applicationStatus: "Pending"})
  const mentors = await User.find({role: "Mentor", applicationStatus: "Pending"})
  const matches = await MatchesModel.find()
  console.log(matches);
  // const menteeMatches = await MatchesModel.find() 
  // console.log('Mentees: ' + mentees);
  // console.log('Mentors: ' + mentors);

  // MatchesModel.update(
  //   { _id: "604fa36ba3c4a06b41afbfd1" },
  //   { $push: { mentee: ["604f5de9959f8812d8ded499"] } }
  // )

  MatchesModel.updateOne(
    { _id: "604fa36ba3c4a06b41afbfd1" },
    { $push: { mentee: ["604f5ec20b34f47d2ce36a3f"] } },
    function(err, result) {
      if (err) {
        res.send(err);
      } else {
        // res.json(result);
      }
    }
  );

//   MatchesModel.findByIdAndUpdate(
//      "604fa36ba3c4a06b41afbfd1",
//     {
//         $push: {
//           mentee: "604f5de9959f8812d8ded499"
//         }
//     }
// )

  // mentees.map((mentee) => {
    
  //     mentors.map((mentor) => {
  //       if(mentee.applicationStatus = "Matched"){
  //       if(mentor.applicationStatus = "Matched"){
          
  //         if(mentee.course = mentor.course){
  //           // console.log('Mentee: '+mentee + 'Mentor: '+mentor)
  //           // const mentees = [];
  //           // mentees.push(mentee._id)
  //           const newMatch = new MatchesModel({
  //             mentor: mentor._id,
  //             mentorName: mentor.firstName,
  //             mentee: mentee._id
  //           })

  //           MatchesModel.update(
  //             { _id: "604fa36ba3c4a06b41afbfd1" },
  //             { $push: { mentee: "602e8792b49764f121a35c47" } }
  //           )
            
  //           User.findByIdAndUpdate(mentee._id, {applicationStatus:"Matched"}, (err, data) =>  {
  //             if (err) {
  //               console.log("err", err);
  //             } else {
  //               console.log("successful status update-MENTEE");
  //               // console.log(data);
  //             }
  //           });

  //           User.findByIdAndUpdate(mentor._id, {applicationStatus:"Matched"}, (err, data) =>  {
  //             if (err) {
  //               console.log("err", err);
  //             } else {
  //               console.log("successful status update-MENTOR");
  //             }
  //           });
            
  //           // matches.map((match) => {
  //           //   console.log(match);
  //           //   if(match.mentor = mentor._id) {
  //           //     console.log("MATCH" + match);
  //           //     MatchesModel.update(
  //           //       { mentor: mentor._id },
  //           //       { $push: { mentee: mentee._id  } }
  //           //     )
                  
  //           //   }else{
  //           //     newMatch.save(); 
  //           //   }
  //           // })

  //           // if(matches != []) {
  //           //   matches.map((match) => {
  //           //     console.log(match);
  //           //     if(match.mentor = mentor._id) {
  //           //       console.log("MATCH" + match);
  //           //       MatchesModel.update(
  //           //         { mentor: mentor._id },
  //           //         { $push: { mentee: mentee._id  } }
  //           //       )
  //           //     }
  //           //   })
  //           // }else{
  //           //   newMatch.save(); 
  //           // }
            

  //         //   MatchesModel.update({mentor:mentor._id}, { $push: { mentee: mentee._id }}, (err, data) =>  {
  //         //     if (err) {
  //         //       console.log("err", err);
  //         //     } else {
  //         //       console.log("success push");
  //         //       console.log(data);
  //         //     }
  //         //   });
            
  //         }
  //       }
  //       console.log("EVERYONE MATCHED");
  //    } })
    
  // })
}

cron.schedule("* * * * *", async() => {
  await findMatch();
});

router.get("/getMatchDetails/:id", (req,res) => {
  const mentee =  MatchesModel.find({mentee:req.params.id});
  const mentor = MatchesModel.findOne({mentor:req.params.id});
  
  if (mentor) {
    MatchesModel.findOne({mentor:req.params.id})
    .then(mentor => {
      User.findOne({_id:mentor.mentee}) 
        .then(mentee => res.json(mentee))
      // res.json(mentor)
    })
  }

  if (mentee) {
    MatchesModel.findOne({mentee:req.params.id})
    .then(mentee => {
        User.findOne({_id:mentee.mentor}) 
          .then(mentor => res.json(mentor))
        // res.json(mentee.mentor)
      })
  }

});


module.exports = router;