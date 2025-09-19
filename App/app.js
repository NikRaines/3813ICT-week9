const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const dbName = "myProject";

async function connect() {
    try {
        const client = new MongoClient(url, {
            serverSelectionTimeoutMS: 5000,
            connectTimeoutMS: 5000
        });
        await client.connect();
        const db = client.db(dbName);
        return { db, client };
    } catch (err) {
        console.error("MongoDB connection failed:", err.message);
        throw err;
    }
}

module.exports = { connect };