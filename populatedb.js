#! /usr/bin/env node

console.log(
  "This script populates some test categories, and items to your database. Specify database as argument - e.g.: node populatedb <mongoDB connection url>"
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Category = require("./models/category");
const Item = require("./models/item");

const categories = [];
const items = [];

const mongoose = require("mongoose");

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createCategories();
  await createItems();
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}

async function categoryCreate(index, name) {
  const category = new Category({ name: name });
  await category.save();
  categories[index] = category;
  console.log(`Added category: ${name}`);
}

async function itemCreate(
  index,
  name,
  description,
  category,
  price,
  number_in_stock,
  hexcode
) {
  const itemDetails = {
    name: name,
    description: description,
    price: price,
    number_in_stock: number_in_stock,
    hexcode: hexcode,
  };

  if (category.length > 0) {
    itemDetails.category = category;
  }

  const item = new Item(itemDetails);
  await item.save();
  items[index] = item;
  console.log(`Added item ${index}: ${item.name}`);
}

async function createCategories() {
  console.log("Adding categories");
  await Promise.all([
    categoryCreate(0, "Red"),
    categoryCreate(1, "Orange"),
    categoryCreate(2, "Yellow"),
    categoryCreate(3, "Green"),
    categoryCreate(4, "Blue"),
    categoryCreate(5, "Purple"),
    categoryCreate(6, "Neutral"),
    categoryCreate(7, "White"),
    categoryCreate(8, "2024 Favourites"),
  ]);
}

async function createItems() {
  console.log("Adding Items");
  await Promise.all([
    itemCreate(
      0,
      "Alabaster",
      "A soft, warm off-white that evokes the tranquility of morning light.",
      [categories[7]._id], // Example of referencing category by ID
      25,
      30,
      "#F0EDE4"
    ),
    itemCreate(
      1,
      "Naval",
      "A deep navy blue, reminiscent of the vast, mysterious ocean depths.",
      [categories[4]._id, categories[8]._id], // Example of referencing categories by ID
      35,
      15,
      "#2C3357"
    ),
    itemCreate(
      2,
      "Tricorn Black",
      "A rich, deep black that brings an air of sophistication and mystery.",
      [categories[6]._id], // Example of referencing category by ID
      40,
      20,
      "#2D2A26"
    ),
    itemCreate(
      3,
      "Accessible Beige",
      "A versatile, warm beige that wraps you in a cozy, comforting hug.",
      [categories[6]._id], // Example of referencing category by ID
      20,
      25,
      "#D3C5B5"
    ),
    itemCreate(
      4,
      "Repose Gray",
      "A light, warm gray that whispers calm and serenity in every room.",
      [categories[6]._id], // Example of referencing category by ID
      22,
      22,
      "#D8D4CD"
    ),
    itemCreate(
      5,
      "Urbane Bronze",
      "A sophisticated dark bronze that exudes elegance and timeless charm.",
      [categories[6]._id], // Example of referencing category by ID
      30,
      18,
      "#5B504D"
    ),
    itemCreate(
      6,
      "Pure White",
      "A crisp, clean white that reflects the purity and freshness of new snow.",
      [categories[7]._id], // Example of referencing category by ID
      25,
      28,
      "#F5F5F3"
    ),
    itemCreate(
      7,
      "Agreeable Gray",
      "A popular warm gray that harmonizes effortlessly with any decor.",
      [categories[6]._id], // Example of referencing category by ID
      22,
      24,
      "#D1CCC1"
    ),
    itemCreate(
      8,
      "Sea Salt",
      "A light, muted green that transports you to a peaceful coastal retreat.",
      [categories[3]._id, categories[8]._id], // Example of referencing categories by ID
      20,
      26,
      "#CAD8C7"
    ),
    itemCreate(
      9,
      "Peppercorn",
      "A dark, moody gray that adds a touch of dramatic flair to any space.",
      [categories[6]._id], // Example of referencing category by ID
      35,
      17,
      "#4B4A47"
    ),
    itemCreate(
      10,
      "Snowbound",
      "A soft, cool white that captures the serene beauty of a winter landscape.",
      [categories[7]._id], // Example of referencing category by ID
      25,
      30,
      "#F1F1EF"
    ),
    itemCreate(
      11,
      "Dovetail",
      "A warm, medium gray that creates a cozy, inviting atmosphere.",
      [categories[6]._id], // Example of referencing category by ID
      28,
      20,
      "#A59F96"
    ),
    itemCreate(
      12,
      "Rainwashed",
      "A serene, soft green that brings the freshness of a spring rain shower.",
      [categories[3]._id], // Example of referencing category by ID
      20,
      23,
      "#C9D9D2"
    ),
    itemCreate(
      13,
      "Eider White",
      "A cool, crisp white that evokes the purity of a swan's feathers.",
      [categories[7]._id], // Example of referencing category by ID
      25,
      29,
      "#E6E4E0"
    ),
    itemCreate(
      14,
      "Hale Navy",
      "A timeless, classic navy that feels as deep and endless as the night sky.",
      [categories[4]._id], // Example of referencing category by ID
      35,
      15,
      "#43495D"
    ),
    itemCreate(
      15,
      "Mindful Gray",
      "A sophisticated, warm gray that inspires calm and mindfulness.",
      [categories[6]._id], // Example of referencing category by ID
      22,
      24,
      "#CAC5BC"
    ),
    itemCreate(
      16,
      "Pewter Green",
      "A deep, muted green that channels the serenity of a forest glade.",
      [categories[3]._id], // Example of referencing category by ID
      30,
      18,
      "#4D6350"
    ),
    itemCreate(
      17,
      "Extra White",
      "A bright, clean white that gleams with the brilliance of fresh snow.",
      [categories[7]._id, categories[8]._id], // Example of referencing categories by ID
      25,
      28,
      "#F8F8F4"
    ),
    itemCreate(
      18,
      "Gauntlet Gray",
      "A bold, dark gray that adds depth and sophistication to any space.",
      [categories[6]._id], // Example of referencing category by ID
      35,
      17,
      "#595654"
    ),
    itemCreate(
      19,
      "Retreat",
      "A calming, earthy green that feels like a sanctuary from the hustle.",
      [categories[3]._id], // Example of referencing category by ID
      20,
      26,
      "#5E6E65"
    ),
    itemCreate(
      20,
      "Requisite Gray",
      "A versatile, warm gray that creates a soothing, harmonious environment.",
      [categories[6]._id], // Example of referencing category by ID
      22,
      24,
      "#CCC5B9"
    ),
    itemCreate(
      21,
      "Inkwell",
      "A deep, rich black that brings a touch of drama and elegance.",
      [categories[6]._id], // Example of referencing category by ID
      40,
      20,
      "#363537"
    ),
    itemCreate(
      22,
      "Misty",
      "A light, airy blue that evokes the tranquility of a misty morning.",
      [categories[4]._id], // Example of referencing category by ID
      20,
      25,
      "#C6D2D6"
    ),
    itemCreate(
      23,
      "Iron Ore",
      "A dark, charcoal gray that adds a bold, industrial edge to your space.",
      [categories[6]._id, categories[8]._id], // Example of referencing categories by ID
      35,
      19,
      "#484746"
    ),
    itemCreate(
      24,
      "Anew Gray",
      "A warm, versatile gray that effortlessly blends with any decor.",
      [categories[6]._id], // Example of referencing category by ID
      22,
      24,
      "#B9B3A9"
    ),
    itemCreate(
      25,
      "Cadet",
      "A soft, muted blue that captures the calm of a clear, peaceful sky.",
      [categories[4]._id], // Example of referencing category by ID
      20,
      26,
      "#A0B0B8"
    ),
    itemCreate(
      26,
      "Cityscape",
      "A deep, urban gray that embodies the sleekness of modern city life.",
      [categories[6]._id], // Example of referencing category by ID
      30,
      21,
      "#8A8988"
    ),
    itemCreate(
      27,
      "Rock Candy",
      "A light, cool gray that offers a refreshing, breezy feel.",
      [categories[6]._id], // Example of referencing category by ID
      22,
      27,
      "#E4E7E3"
    ),
    itemCreate(
      28,
      "Rosemary",
      "A deep, herbaceous green that invites the tranquility of nature.",
      [categories[3]._id], // Example of referencing category by ID
      30,
      18,
      "#4F6D60"
    ),
    itemCreate(
      29,
      "Rejuvenate",
      "A bold, vivid red that ignites passion and energy in any space.",
      [categories[0]._id, categories[8]._id], // Example of referencing categories by ID
      30,
      15,
      "#D62C28"
    ),
    itemCreate(
      30,
      "Amber Wave",
      "A vibrant, golden orange that radiates warmth and vitality.",
      [categories[1]._id], // Example of referencing category by ID
      28,
      20,
      "#F4A241"
    ),
    itemCreate(
      31,
      "Sunflower",
      "A cheerful, bright yellow that brings the sunshine indoors.",
      [categories[2]._id], // Example of referencing category by ID
      25,
      22,
      "#FFDA3A"
    ),
    itemCreate(
      32,
      "Lavender Whisper",
      "A soft, delicate purple that evokes the fragrance of a blooming garden.",
      [categories[5]._id], // Example of referencing category by ID
      27,
      25,
      "#C8A2C8"
    ),
    itemCreate(
      33,
      "Saffron Thread",
      "A rich, warm yellow that adds a touch of exotic spice to your decor.",
      [categories[2]._id], // Example of referencing category by ID
      22,
      18,
      "#F4C430"
    ),
    itemCreate(
      34,
      "Coral Reef",
      "A lively, bright coral that energizes any space with its vibrancy.",
      [categories[1]._id, categories[8]._id], // Example of referencing categories by ID
      28,
      19,
      "#FF6F61"
    ),
    itemCreate(
      35,
      "Cherry Tomato",
      "A bold, juicy red that makes a striking statement in any room.",
      [categories[0]._id], // Example of referencing category by ID
      30,
      17,
      "#DA291C"
    ),
    itemCreate(
      36,
      "Pumpkin Patch",
      "A deep, autumnal orange that captures the essence of fall.",
      [categories[1]._id], // Example of referencing category by ID
      26,
      21,
      "#D35400"
    ),
    itemCreate(
      37,
      "Goldenrod",
      "A deep, mustard yellow that adds a retro touch to your space.",
      [categories[2]._id], // Example of referencing category by ID
      24,
      20,
      "#DAA520"
    ),
    itemCreate(
      38,
      "Violet Verbena",
      "A rich, velvety purple that brings a touch of luxury and elegance.",
      [categories[5]._id, categories[8]._id], // Example of referencing categories by ID
      29,
      16,
      "#5F4B8B"
    ),
    itemCreate(
      39,
      "Burnt Orange",
      "A deep, rustic orange that evokes the warmth of a desert sunset.",
      [categories[1]._id], // Example of referencing category by ID
      27,
      18,
      "#CC5500"
    ),
    itemCreate(
      40,
      "Blushing Red",
      "A soft, rosy red that adds a gentle touch of romance.",
      [categories[0]._id], // Example of referencing category by ID
      30,
      20,
      "#E57373"
    ),
    itemCreate(
      41,
      "Lemon Twist",
      "A zesty, bright yellow that invigorates and energizes any space.",
      [categories[2]._id, categories[8]._id], // Example of referencing categories by ID
      25,
      21,
      "#FFD300"
    ),
    itemCreate(
      42,
      "Grape Juice",
      "A deep, rich purple that adds a touch of boldness and drama.",
      [categories[5]._id], // Example of referencing category by ID
      28,
      18,
      "#6F2DA8"
    ),
    itemCreate(
      43,
      "Peach Nectar",
      "A soft, sweet orange that brings a sense of warmth and coziness.",
      [categories[1]._id], // Example of referencing category by ID
      26,
      22,
      "#FFCC99"
    ),
    itemCreate(
      44,
      "Candy Apple",
      "A vibrant, glossy red that adds a playful and energetic touch.",
      [categories[0]._id], // Example of referencing category by ID
      30,
      19,
      "#FF0800"
    ),
    itemCreate(
      45,
      "Butterscotch",
      "A warm, creamy yellow that feels as comforting as a sweet treat.",
      [categories[2]._id], // Example of referencing category by ID
      24,
      23,
      "#FFDDAF"
    ),
    itemCreate(
      46,
      "Pale Pink",
      "Light blush of pink, perfect for light-colored rooms that want an elegant rosy hint.",
      [categories[0]._id, categories[8]._id], // Example of referencing categories by ID
      10,
      24,
      "#FADADD"
    ),
  ]);
}