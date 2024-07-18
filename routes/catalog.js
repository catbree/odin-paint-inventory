const express = require("express");
const router = express.Router();

// Require controller modules
const category_controller = require("../controllers/categoryController");
const item_controller = require("../controllers/itemController");

/// ITEM ROUTES ///

// get request for creating item
router.get("/item/create", item_controller.item_create_get);

// post request for creating item
router.post("/item/create", item_controller.item_create_post);

// get request for deleting item
router.get("/item/delete", item_controller.item_delete_get);

// post request for deleting item
router.post("/item/delete", item_controller.item_delete_post);

// get request for updating item
router.get("/item/update", item_controller.item_update_get);

// post request for updating item
router.post("/item/update", item_controller.item_update_post);

// get request for one item
router.get("/item/:id", item_controller.item_detail);

// get request for a list of all items
router.get("/items", item_controller.item_list);



/// CATEGORY ROUTES ///

// get request for creating category
router.get("/category/create", category_controller.category_create_get);

// post request for creating category
router.post("/category/create", category_controller.category_create_post);

// get request for deleting category
router.get("/category/delete", category_controller.category_delete_get);

// post request for deleting category
router.post("/category/delete", category_controller.category_delete_post);

// get request for updating category
router.get("/category/update", category_controller.category_update_get);

// post request for updating category
router.post("/category/update", category_controller.category_update_post);

// get request for one category
router.get("/category/:id", category_controller.category_detail);

// get request for a list of all categorys
router.get("/categories", category_controller.category_list);

module.exports = router