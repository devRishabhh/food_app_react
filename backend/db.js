// db.js
const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://codinghelper123:mern%40123@cluster0.zxjytlf.mongodb.net/gofoodmern?retryWrites=true&w=majority';

let foodItems = [];
let foodCategory = [];

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");

    // Fetch data from collections
    const db = mongoose.connection.db;
    foodItems = await db.collection('food_items').find({}).toArray();
    foodCategory = await db.collection('food_category').find({}).toArray();

  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};

// Export functions to get the data
const getFoodItems = () => foodItems;
const getFoodCategory = () => foodCategory;

module.exports = { mongoDB, getFoodItems, getFoodCategory };
