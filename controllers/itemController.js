const Item = require("../models/item");
const Category = require("../models/category");
const asyncHandler = require("express-async-handler");

// display a list of all items
exports.item_list = asyncHandler(async (req, res, next) => {
  const allItems = await Item.find({}, "name price number_in_stock").exec();
  res.render("item_list", {
    title: "Item List",
    item_list: allItems,
  })
});

// display a page for a specific item
exports.item_detail = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: item detail");
  });

// display item create form on GET
exports.item_create_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: item create form GET");
  });

// handle item create form on POST
exports.item_create_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: item create form POST");
  });

// display item delete form on GET
exports.item_delete_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: item delete form GET");
  });

// handle item delete form on POST
exports.item_delete_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: item delete form POST");
  });

// display item update form on GET
exports.item_update_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: item update form GET");
  });

// handle item update form on POST
exports.item_update_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: item update form POST");
  });
