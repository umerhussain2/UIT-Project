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

// GET -------------------------
app.get("/api/", (req, res) => {
  res.send(products);
});

// GET DB -------------------------
app.get("/api/admin/orders/", async (req, res) => {
  const collection = client.db("cart").collection("orders");
  const document = await collection.find().toArray();
  res.send(document);
});

// GET Single Product--------------------------------
// app.get("/api/productdetails/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   console.log("id", id);
//   const a = products.module.find((a) => a.id === id);
//   console.log("a", a);
//   res.send(a);
// });

// POST ----------------------------------------------------
app.post("/api/", async (req, res) => {
  const collection = client.db("cart").collection("orders");
  await collection.insertOne(req.body);
  const document = await collection.find().toArray();
  res.send(document);
});

// DELETE -------------------------
// app.delete("/api/admin/orders/:id", async (req, res) => {
// const rem = req.params.id;
// const collection = client.db("cart").collection("orders");
// console.log(rem);
// const id = { id: rem };
// const deletedDocument = await collection.findOneAndDelete(id);
// res.send(deletedDocument.value);
// });

app.delete("/api/orders/:id", (req, res) => {
  db.collection("orders").deleteOne(
    { id: parseInt(req.params.id) },
    (err, result) => {
      if (err) throw err;
      res.send("Order is delete");
    }
  );
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
