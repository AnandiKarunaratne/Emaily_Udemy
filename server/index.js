// import in the express library
const express = require('express'); 
// server side we are going to use common js modules
// but in front end we can use import syntax

// express application
const app = express(); 

app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});
// app - represents underlying running express server
// express app to register this route handler with

// get - watch for incoming requests with this method
// we create a brand new route handler by app.get
// get - get info, post - send info, 
// put - update all properties, delete - delete somthing, 
// patch - update 1 or 2 properties

// '/' - watch for requests trying to access '/'
// route portion of the handler
// localhost:5000/ - '/' root route

// req - object representing the incoming request
// res - object representing the outgoing response

// res.send({hi: 'there'}) - immediately send some JSON back 
// to whoever made this request

// app.listen(5000);
// instructs express to tell node that it wants to listen 
// for incoming traffic on port 5000

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


 