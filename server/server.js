const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connect } = require('../App/app');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/products', async (req, res) => {
    const { db, client } = await connect();
    const result = await db.collection("products").find({}).toArray();
    await client.close();
    res.json(result);
});

app.post('/products', async (req, res) => {
    const newProduct = req.body;
    const { db, client } = await connect();
    const result = await db.collection("products").insertOne(newProduct);
    await client.close();
    res.json({id: result.insertedId });
});

app.put('/products/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const updateData = { $set: req.body };
    const { db, client } = await connect();
    const result = await db.collection("products").updateOne({ id: id }, updateData);
    await client.close();
    res.json({modifiedCount: result.modifiedCount });
});

app.delete('/products/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const { db, client } = await connect();
    const result = await db.collection("products").deleteOne({ id: id });
    await client.close();
    res.json({deletedCount: result.deletedCount });
});

app.listen(PORT,() => console.log(`Server running on http://localhost:${PORT}`));