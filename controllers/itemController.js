const Item = require("../models/item");
const Category = require("../models/category");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

// display a list of all items
exports.item_list = asyncHandler(async (req, res, next) => {
  const allItems = await Item.find({}, "name price number_in_stock").exec();
  res.render("item_list", {
    title: "Item List",
    item_list: allItems,
  });
});

// display a page for a specific item
exports.item_detail = asyncHandler(async (req, res, next) => {
  const item = await Item.findById(req.params.id).populate('category').exec();
  console.log(item.category[0].name);

  res.render("item_detail", {
    title: item.name,
    item: item,
  });
});

// display item create form on GET
exports.item_create_get = asyncHandler(async (req, res, next) => {
  const allCategories = await Category.find({}).exec();

  res.render("item_form", { title: "Create Item", categories: allCategories });
});

// handle item create form on POST
exports.item_create_post = [
  body("name")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Name field cannot be empty.")
    .escape(),
  body("description")
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage("Description field can only have a maximum of 100 characters.")
    .escape(),
  body("category.*").escape(),
  body("price")
    .trim()
    .isNumeric()
    .withMessage("Price field can only accept whole numbers."),
  body("number_in_stock")
    .trim()
    .isNumeric()
    .withMessage("Number in stock field can only accept whole numbers."),
  body("hexcode")
    .trim()
    .matches(/^#(?:[0-9a-fA-F]{3}){1,2}$/)
    .withMessage("Hexcode field must use this color code format, #FFFFFF).")
    .escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    const item = new Item({
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      price: req.body.price,
      number_in_stock: req.body.number_in_stock,
      hexcode: req.body.hexcode,
    });

    if (!errors.isEmpty()) {
      const allCategories = await Category.find({}).exec();
      for (const category of allCategories) {
        if (item.category.includes(category._id)) {
          category.checked = true;
        }
      }

      res.render("item_form", {
        title: "Create Item",
        categories: allCategories,
        item: item,
        errors: errors.array(),
      });
    } else {
      const itemExists = await Item.findOne({ name: req.body.name })
        .collation({
          locale: "en",
          strength: 2,
        })
        .exec();

      if (itemExists) {
        res.redirect(itemExists.url);
      } else {
        await item.save();
        res.redirect(item.url);
      }
    }
  }),
];

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
