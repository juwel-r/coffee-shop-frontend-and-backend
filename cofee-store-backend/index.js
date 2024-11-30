const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.USER_ID}:${process.env.PASS}@cluster0.hjkzu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const coffeeCollections = client.db("Coffee_DB").collection("coffee-list");
    const userCollections = client.db("Coffee_DB").collection("user-list");

    //Create Data =====>> User Section
    app.post("/users", async (req, res) => {
      const newUser = req.body;
      const result = await userCollections.insertOne(newUser);
      res.send(result);
      console.log(newUser, "result", result);
    });

    //get Data
    app.get("/users", async (req, res) => {
      const cursor = userCollections.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    //Get Single data
    app.get("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await userCollections.findOne(query);
      res.send(result);
    });

    //Update or Patch data
    app.patch("/users", async (req, res) => {
      const email = req.body.email;
      const filter = { email };
      const updateUser = {
        $set: {
          name: req.body.name,
          email: email,
          photo: req.body.photo,
        },
      };
      const result = await userCollections.updateOne(filter, updateUser);
      res.send(result);
      console.log(result)
    });

    //Create Data ======>> Coffee Section
    app.post("/coffee-add", async (req, res) => {
      const newCoffee = req.body;
      const result = await coffeeCollections.insertOne(newCoffee);
      res.send(result);
    });

    //Single Data get
    app.get("/coffee-list/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeeCollections.findOne(query);
      res.send(result);
    });

    //Get Data
    app.get("/coffee-list", async (req, res) => {
      const cursor = coffeeCollections.find();
      const result = await cursor.toArray();
      res.send(result);
      console.log(result);
    });

    //Delete Data
    app.delete("/coffee-list/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeeCollections.deleteOne(query);
      res.send(result);
    });

    //Update Data
    app.put("/coffee-list/:id", async (req, res) => {
      const id = req.params.id;
      const updatedCoffee = req.body;
      const { name, chef, supplier, taste, category, details, photo } =
        updatedCoffee;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const setUpdatedCoffee = {
        $set: {
          name: name,
          chef: chef,
          supplier: supplier,
          taste: taste,
          category: category,
          details: details,
          photo: photo,
        },
      };
      const result = await coffeeCollections.updateOne(
        filter,
        setUpdatedCoffee,
        options
      );
      res.send(result);
    });
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("server running!");
});

app.listen(port, () => {
  console.log("server running on-", port);
});
