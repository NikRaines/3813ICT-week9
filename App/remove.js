const { connect } = require('./app');

async function removeProduct() {
    const { db, client } = await connect();
    
    let myquery = { id: 3 };

    const result = await db.collection("products").deleteOne(myquery);
    console.log("1 product deleted");
    
    await client.close();
}

removeProduct();