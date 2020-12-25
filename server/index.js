// import in the express library
const express = require('express'); 
// server side we are going to use common js modules
// but in front end we can use import syntax

// for oauth
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// express application
const app = express(); 

// console.developers.google.com
// clientID  764917275333-8l8t0h3kl2kjm546utqge9rhdtabpemc.apps.googleusercontent.com
// clientSecret MrZS8gwZxtOKzWdKSv1pqqpR

// app.get('/', (req, res) => {
//     res.send({ hi: 'there' });
// });

passport.use(new GoogleStrategy());
// creates a new instance of the google passport strategy

// app.listen(5000);
// instructs express to tell node that it wants to listen 
// for incoming traffic on port 5000

// ============================================
// deployment
// 1. dynamic port building
// 2. specify node environment: package.json, node and npm
// 3. specify start script in package.json
// 4. create .gitignore

const PORT = process.env.PORT || 5000
// look at the underlying env and see if they have declared 
// a port for us to use
// when heroku runs the app it can inject env variables
// || 5000 is added if we are running on a local machine
app.listen(PORT);

// heroku login
// heroku create
// 1st link - address that will navigate to whenever we want
// to visit our application inside the browser
//  2nd link - deployment target

// https://calm-garden-20638.herokuapp.com/ | https://git.heroku.com/calm-garden-20638.git
// git remote add heroku https://git.heroku.com/calm-garden-20638.git
// git push heroku master 
// heroku open
// debug - heroku logs


 