const express = require('express');
const router = express.Router();
const { getFoodItems, getFoodCategory } = require('../db'); // Ensure path is correct

router.post('/foodData', async (req, res) => {
  try {
    const items = getFoodItems();
    const category = getFoodCategory();
    res.send([items, category]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
