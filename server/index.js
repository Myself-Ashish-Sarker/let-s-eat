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

// mongo config
// const uri = "mongodb+srv://lets-eat:Sgo1jB5Be7qNnvVz@mongo-app.q62fegx.mongodb.net/?retryWrites=true&w=majority&appName=mongo-app";
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@mongo-app.q62fegx.mongodb.net/?retryWrites=true&w=majority&appName=mongo-app`;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        directConnection: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)

        // await client.connect();

        // declaring datatbase
        const categoryCollection = client.db("lets-eat").collection("category");
        const servicesCollection = client.db("lets-eat").collection("services");
        // declaring datatbase

        // all api will written here
        // category api
        app.get('/category', async (req, res) => {
            const result = await categoryCollection.find().toArray();
            res.send(result);
        })
        app.get('/services', async (req, res) => {
            const result = await categoryCollection.find().toArray();
            res.send(result);
        })
        // category api
        // all api will written here







        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
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