const MongoClient = require("mongodb").MongoClient;
const uri = process.env.MONGODB_URI
let client;
const queryTest = async function queryTest() {
    client = new MongoClient(uri);
    try {
        const database = client.db('vercel-vite');
        const tests = database.collection('test');
        // Query for a movie that has the title 'Back to the Future'
        const query = {};
        const test = await tests.findOne(query);
        console.log(test)
        return test
    } catch (ex) {
        // Ensures that the client will close when you finish/error
        console.log(ex)
    }
}
export {
    queryTest
}