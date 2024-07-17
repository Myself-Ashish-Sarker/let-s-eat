const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
// middleware

// lets-eat
// Sgo1jB5Be7qNnvVz

console.log(process.env.DB_USER);
console.log(process.env.DB_PASS);

// mongo config
// const uri = "mongodb+srv://lets-eat:Sgo1jB5Be7qNnvVz@mongo-app.q62fegx.mongodb.net/?retryWrites=true&w=majority&appName=mongo-app";
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@mongo-app.q62fegx.mongodb.net/?retryWrites=true&w=majority&appName=mongo-app`;


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
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

// mongo config

app.get('/', (req, res) => {
    res.send("Let's taste food!");
});

app.listen(port, () => {
    console.log(`simple CRUD app running on port ${port}`);
});
