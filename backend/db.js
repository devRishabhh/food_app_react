// db.js or a relevant file
const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://codinghelper123:mern%40123@cluster0.zxjytlf.mongodb.net/gofoodmern?retryWrites=true&w=majority';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");

    // Access the food_items collection
    const collection = mongoose.connection.db.collection('food_items');

    // Fetch all documents from the collection
    const foodItems = await collection.find({}).toArray();

    // Display the fetched data in the console
    global.food_items =foodItems;
    // console.log(global.food_items)
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};

module.exports = mongoDB;

