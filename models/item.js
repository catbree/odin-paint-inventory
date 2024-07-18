const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Defining Item Schema
const ItemSchema = new Schema({
    name: { type: String, required: true, maxLength: 50 },
    description: { type: String, required: true, maxLength: 200 },
    category: [{ type: Schema.Types.ObjectId, ref: "Category", required: true }],
    price: { type: Number, required: true },
    number_in_stock: { type: Number, required: true },
    hexcode: { type: String, required: true }
});

// Virtual for item's status
ItemSchema.virtual("status").get(function () {
    let status = '';
    
    if (this.number_in_stock <= 0) {
        status = 'Out of stock'
    } else if (this.number_in_stock > 0 && this.number_in_stock < 4) {
        status = 'Selling fast'
    } else {
        status = 'Available'
    };

    return status;
})

// Virtual for item's URL
ItemSchema.virtual("url").get(function () {
    return `/catalog/item/${this._id}`;
});

// Export model
module.exports = mongoose.model("Item", ItemSchema);