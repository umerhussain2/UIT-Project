// Import
const express = require("express");
const cors = require("cors");
const products = require("./products");
const { MongoClient, ObjectId } = require("mongodb");
const port = 4000;
const app = express();

// MiddleWare---------------------------------------------
app.use(cors());
app.use(express.json());
app.set("port", process.env.PORT || port);
// app.use("/images", express.static("images"));
app.use("/public", express.static(__dirname + "/public"));

// Database Config...-------------------------------------------------------------------------
const uri =
  "mongodb+srv://umer-db:umerdb123@cluster0.l7nnwm2.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

(async () => {
  try {
    await client.connect();
    console.log("Database Connected");
  } catch (error) {
    console.log("Error while connecting...", error);
  }
})();

// ---PUBLIC USER---

// GET ---
// get All products public user -----
app.get("/api/products", (req, res) => {
  res.send(products);
});

// POST ---
// post order from public user
app.post("/api/", async (req, res) => {
  const collection = client.db("cart").collection("orders");
  await collection.insertOne(req.body);
  const document = await collection.find().toArray();
  res.send(document);
});

// ---ADMIN---

// GET ---
// Get all orders admin ---
app.get("/api/admin/orders", async (req, res) => {
  const collection = client.db("cart").collection("orders");
  const document = await collection.find().toArray();
  res.send(document);
});

// Get all shippid data for admin -------
app.get("/api/admin/shipped", async (req, res) => {
  const collection = client.db("cart").collection("shipped");
  const document = await collection.find().toArray();
  res.send(document);
});

// POST ---
// admin podt order to shipped
app.post("/api/admin/shipped", async (req, res) => {
  const collection = client.db("cart").collection("shipped");
  await collection.insertOne(req.body);
  const document = await collection.find().toArray();
  res.send(document);
});

// DELETE ---
// delete order admin---
app.delete("/api/admin/orders/:id", (req, res) => {
  const getId = parseInt(req.params.id);
  const collection = client.db("cart").collection("orders");
  collection.deleteOne({ id: getId });
  res.send("order deleted");
});

// When order delivered admin---
app.delete("/api/admin/shipped/:id", (req, res) => {
  const Id = parseInt(req.params.id);
  const collection = client.db("cart").collection("shipped");
  collection.deleteOne({ id: Id });
  res.send("order deleted");
});

// PUT--------------------------------
// app.put("/:id", async (req, res) => {
//   const getId = String(req.params.id);
//   console.log(getId);
//   const newData = req.body.task;
//   const update = { $set: { task: newData } };
//   const collection = client.db("cart").collection("orders");
//   const Id = { _id: new ObjectId(getId) };
//   const options = { returnOriginal: false };
//   const updatedList = await collection.findOneAndUpdate(Id, update, options);
//   console.log(updatedList);
//   res.send(updatedList.value);
// });

// Server Cofig----------------------------
app.listen(port, () => {
  console.log("Listening on port: ", port);
});
