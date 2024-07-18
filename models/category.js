const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Defining Category Schema
const CategorySchema = new Schema({
    name: { type: String, required: true, maxLength: 50 },
});

// Virtual for category's URL
CategorySchema.virtual("url").get(function () {
    return `/catalog/category/${this._id}`;
});

// Export model
module.exports = mongoose.model("Category", CategorySchema);