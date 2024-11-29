const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//=====================>>
const uri = `mongodb+srv://${process.env.USER_ID}:${process.env.PASS}@cluster0.hjkzu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const coffeeCollections = client.db("Coffee_DB").collection("coffee-list");

    //Create Data
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

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

//=====================>>

app.get("/", (req, res) => {
  res.send("server running!");
});

app.listen(port, () => {
  console.log("server running on-", port);
});
