const cron = require('node-cron');
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../Models/SignUpModels');
const MatchesModel = require('../Models/MatchesModel');
const MessagesModel = require('../Models/MessagesModel');


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

//update user profile
router.put('/updateProfile/:id', (req, res) => {
  //updates recieved from the fron-end
  const update ={
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    course: req.body.course,
    yearOfStudy: req.body.yearOfStudy,
    placement: req.body.placement,
    summary: req.body.summary,
    interests: req.body.interests,
  };
  console.log(update);
  //find user in database by their id and update their details.
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

//find matches
const findMatch = async (req, res) => {
  //array of mentees
  const mentees = await User.find({role: "Mentee"})
  //array of mentors
  const mentors = await User.find({role: "Mentor"})
  //array of existing matches
  const matches = await MatchesModel.find()

  //loop through each mentee
  mentees.map((mentee) => {
    //loop through each mentor
      mentors.map((mentor) => {
        if(mentee.applicationStatus != "Matched"){
          //firstly checks if they study the same course as this is a default compulsory criteria
          if(mentee.course == mentor.course){
            // creates a new match if they study the same course
            const newMatch = new MatchesModel({
              mentor: mentor._id,
              mentorName: mentor.firstName,
              mentee: mentee._id
            })
            console.log("MATCH - COURSE");
            //not a compulsory criteria so checks if either opted to be match to the same gender
            if(mentee.matchingCriteria == "Same Gender" || mentor.matchingCriteria == "Same Gender"){
              if(mentee.gender == mentor.gender){
                const newMatch = new MatchesModel({
                  mentor: mentor._id,
                  mentorName: mentor.firstName,
                  mentee: mentee._id
                })
                console.log("MATCH - GENDER");
              }
              //not a compulsory criteria so checks if either opted to be match to the same ethnicity
            }else if(mentee.matchingCriteria == "Same Ethnicity" || mentor.matchingCriteria == "Same Ethnicity"){
              if(mentee.ethniciy == mentor.ethnicity){
                const newMatch = new MatchesModel({
                  mentor: mentor._id,
                  mentorName: mentor.firstName,
                  mentee: mentee._id
                })
                console.log("MATCH - ETHNICITY");
              }
              //not a compulsory criteria so checks if either opted to be match to the same nationality
            }else if(mentee.matchingCriteria == "Same Nationality" || mentor.matchingCriteria == "Same Nationality"){
              if(mentee.nationality == mentor.nationality){
                const newMatch = new MatchesModel({
                  mentor: mentor._id,
                  mentorName: mentor.firstName,
                  mentee: mentee._id
                })
                console.log("MATCH - NATIONALITY");
              }
              //not a compulsory criteria so checks if either opted to be match based on placement
            }else if(mentee.matchingCriteria == "Placement" || mentor.matchingCriteria == "Placement"){
              if(mentor.placement == "Yes"){
                const newMatch = new MatchesModel({
                  mentor: mentor._id,
                  mentorName: mentor.firstName,
                  mentee: mentee._id
                })
                console.log("MATCH - PLACEMENT");
              }
            }
            
            // if mentee has been matched then their status is updated
            User.findByIdAndUpdate(mentee._id, {applicationStatus: "Matched"}, (err, data) =>  {
              if (err) {
                console.log("err", err);
              } else {
                console.log("successful status update-MENTEE");
              }
            });
            // if mentor has been matched then their status is updated
            User.findByIdAndUpdate(mentor._id, {applicationStatus: "Matched"}, (err, data) =>  {
              if (err) {
                console.log("err", err);
              } else {
                console.log("successful status update-MENTOR");
              }
            });

            // if the matching collection is not empty
            if(matches.length > 0) {
              console.log(matches.length == 0);
              // loops thought each match
              matches.map((match) => {
                console.log(match.mentor);
                // for those who opted for more than one match, it updates and adds another match to their existing match object
                if(match.mentor == mentor._id) {
                  console.log("MATCH" + match);
                  MatchesModel.updateOne(
                    { mentor: mentor._id },
                    { $push: { mentee: [mentee._id] } },
                    function(err, result) {
                      if (err) {
                        res.send(err);
                      } else {
                      }
                    }
                  );
                }else {
                  //saves the new match
                  newMatch.save();
                  console.log("NewMatch");
            } 
              })
            }
          }
        console.log("EVERYONE MATCHED");
     } })
    
  })
};

//rund the algorithm every 3 days
cron.schedule("3 * * * *", async() => {
  await findMatch();
});

router.get("/getMatchDetails/:id", async(req,res) => {
  const mentee = await MatchesModel.findOne({mentee:req.params.id});
  const mentor = await MatchesModel.findOne({mentor:req.params.id});
  const menteeDetails = [];
  console.log("HEEE"+mentee);

  if (mentor) {
    MatchesModel.findOne({mentor:req.params.id})
    .then(match => {
      User.find({_id:match.mentee}) 
        .then(mentee => res.json(mentee))
      // res.json(mentor)
    })
  }


  if (mentee) {
    MatchesModel.findOne({mentee:req.params.id})
    .then(match => {
      console.log(match);
        User.findOne({_id:match.mentor}) 
          .then(mentor => res.json(mentor))
        // res.json(mentee.mentor)
      })
  }

});

router.post("/saveMessage", (req, res) => {
 const message = new MessagesModel({
  //  chatID: req.body.chatID,
   from: req.body.from,
   to: req.body.to,
   message: req.body.message
 });

  message.save()
    .then(message => {
      console.log(message + "SAVED");
    }).catch(err => {
      console.log(err);
      // res.status(500).json({msg: `User ${err.keyValue['email']} already exists. Try Loggin In.`});
  });
});

router.get("/getMessages/:id", (req,res) => {
//find chat based on if sender id:
// if from == user.id or to==user.id
  const fromMsg = MessagesModel.find({from:req.params.id});
  const toMsg = MessagesModel.find({to:req.params.id});
  if(fromMsg){
    MessagesModel.find({from:req.params.id}).sort({createdAt: -1}) 
    .then(message => res.json(message))
    .catch(err => res.status(400).json('Error: ' + err));
  } else if (toMsg){
    MessagesModel.find({to:req.params.id}).sort({createdAt: -1}) 
    .then(message => res.json("MESSAGE" + message))
    .catch(err => res.status(400).json('Error: ' + err));
  }
});

router.put('/declineReason/:id', (req,res) => {
  const update ={
    declineReason: req.body.declineReason,
    isConfirmed: req.body.isConfirmed
  };

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

router.put('/confirmMatch/:id', (req,res) => {
  User.findByIdAndUpdate(req.params.id, {isConfirmed: req.body.isConfirmed}, (err, data) =>  {
    if (err) {
      console.log("err", err);
    } else {
      console.log("success");
      console.log(data);
      res.send(data);
    }
  });
});


module.exports = router;