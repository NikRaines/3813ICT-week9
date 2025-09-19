const { connect } = require('./app');

async function readProducts() {
    const { db, client } = await connect();

    const result = await db.collection("products").find({}).toArray();
    console.table(result);
    
    await client.close();
}

readProducts();