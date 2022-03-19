const { spawn } = require('child_process');
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 5000

// var readline = require('readline');
// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
var input = "Hi";
// rl.question("", function(input) {
  

    var childPython = spawn('py', ['try.py', input]);
    childPython.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`)
      {  
        //request is sent to react from here
        app.get('/api/hello', (req, res) => {
            res.send({express: (`${data}`) });
            // res.send(input);
          });
      }   


    });
    childPython.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });
    
    childPython.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        // send data to browser
        });
    
    
  // rl.close();
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/api/hello', (req, res) => {
//   res.send({ express: 'Hello From Express'+input });
//   // res.send(input);
// });

app.post('/api/world', (req, res) => {
  console.log(req.body);
  childPython = spawn('py', ['try.py', `${req.body.post}`]);
  childPython.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`)
   
  {  
    //request is sent to react from here
    app.get('/api/hello', (req, res) => {
        res.send({express: (`${data}`) });
        // res.send(input);
      });
    }   


});
//recieved request from react
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );

});

app.listen(port, () => console.log(`Listening on port ${port}`));