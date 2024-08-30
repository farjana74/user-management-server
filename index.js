const express = require('express');
const cors = require ('cors');
const app = express();
const port = process.env.PORT || 5000;


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://allUser:OmdwTVcr17OPpdmx@cluster0.uzrqz5q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
    try {
        await client.connect()
      // Connect to the "insertDB" database and access its "haiku" collection
      const database = client.db("userDB");
      const userCollection= database.collection("user");
      
      // Create a document to insert
      app.post('/users',async (req,res)=>{
       
        const newUser = req.body;
        const result = await userCollection.insertOne(newUser);
        console.log(result)
        res.send(result)

        
    })
      
      
      // Print the ID of the inserted document
      console.log(`A document was inserted with the _id: ${result.insertedId}`);
    } finally {
       // Close the MongoDB client connection
      await client.close();
    }
  }
  // Run the function and handle any errors
  run().catch(console.dir);


// middleware
app.use(cors());
app.use(express.json())



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
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser)
})

app.listen (port,()=>{
    console.log(`Server is running on PORT:${port}`)
})