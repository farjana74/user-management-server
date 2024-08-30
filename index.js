const express = require('express');
const cors = require ('cors');
const app = express();
const port = process.env.PORT || 5000;


// middleware
app.use(cors());

const users= [{
    id:1,name:'sabila', email:'dsed@gmail.com'},
    {id:2,name:'sabieea', email:'dd@gmail.com'},
    {id:3,name:'sabddla', email:'dsxd@gmail.com'},
    ]

app.get('/',(req,res)=>{
res.send("Users Management server is running")
})

app.get('/users',(req,res)=>{
    res.send(users)
})
app.post('/users',(req,res)=>{
    console.log(req.body)
})

app.listen (port,()=>{
    console.log(`Server is running on PORT:${port}`)
})