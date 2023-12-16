require('dotenv/config')
const express = require('express')
const app = express()
const port =process.env.PORT || 8080
const mongoose = require('mongoose')
const connect = require('./config/db')

// route
// app.get('/about', function (req, res) {
  //   res.send('About || Page')
  // })
  // or
  // app.get('/about', (req, res)=>{res.json({message:'about page'})})
  
  
  // server
  // npm init -y (this wud initialize npm and wud create node_modules folder,packgage.json file and also package-lock.json)
  //  npm install --save-dev nodemon and do d below in ur script (found in package.json file)
  //  "scripts": {
    //   "test": "echo \"Error: no test specified\" && exit 1", 
    //   "dev":"nodemon index",
    //   "start":"node index"
    // },
    // remember to  require express, use sample from express by searching for express on 

    // port and server

   connect()
   .then(()=>{
    try {
      app.listen(port,()=>
      console.log(`server is connected to http://localhost:${port}`))

    } catch (error) {
      console.log('Cannot connect to the server');
    }
  })
  .catch((error)=>{
     console.log('Invalid database connection..!', error);
   })

    app.get('/', (req, res)=> {
      res.send('app is running')
    })

    app.use((req, res)=>{
      res.send('that route doesnt exists');
    });
