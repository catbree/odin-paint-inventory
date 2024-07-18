var express = require('express');
var router = express.Router();
const asyncHandler = require("express-async-handler");

const Category = require("../models/category");
const Item = require("../models/item");

index_get = asyncHandler(async (req, res, next) => {
  const [numCategories, numItems,] = await Promise.all([
    Category.countDocuments({}).exec(),
    Item.countDocuments({}).exec(),
  ]);

  res.render("index", {
    title: "Catbree Paint House",
    category_count: numCategories,
    item_count: numItems,
  });
});

/* GET home page. */
router.get('/', index_get);


module.exports = router;