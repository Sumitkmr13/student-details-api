const express = require('express');
const app = express();
const port = 8080;
const fs = require('fs');

app.use(express.json());

// let studentDetails ={};

app.post('/student/add', (req, res) => {
    console.log('request', req.body);
    fs.writeFile("student.json", JSON.stringify(req.body), err => {

        // Checking for errors
        if (err) throw err;

        console.log("Done writing"); // Success
        res.send({ "result": "Success" });
    });

});

app.get('/student/getDetails', (req, res) => {
    fs.readFile("student.json",(err, data) => {

        // Check for errors
        if (err) throw err;

        // Converting to JSON
        const studentDetails = JSON.parse(data);

        console.log(studentDetails); // Print users 
        res.send(studentDetails);
    });
});



app.listen(port, () => {
    console.log('Server has been listening on port' + port);
});