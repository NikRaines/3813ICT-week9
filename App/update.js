const { connect } = require('./app');

async function updateProduct() {
    const { db, client } = await connect();
    
    let myquery = { id: 2 };
    let newvalues = { $set: { price: 250, units: 16, description: "smartphone updated" } };

    const result = await db.collection("products").updateOne(myquery, newvalues);
    console.log("1 product updated");
    
    await client.close();
}

updateProduct();