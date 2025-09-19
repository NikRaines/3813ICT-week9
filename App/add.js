const { connect } = require('./app');

async function addProducts() {
    const { db, client } = await connect();

    let products = [
        { id: 1, name: "Laptop", description: "laptop", price: 100, units: 10 },
        { id: 2, name: "Phone", description: "smartphone", price: 200, units: 15 },
        { id: 3, name: "Headphones", description: "quiet", price: 300, units: 20 }
    ];

    const result = await db.collection("products").insertMany(products);
    console.log(result.insertedCount + " products inserted");
    
    await client.close();
}

addProducts();

