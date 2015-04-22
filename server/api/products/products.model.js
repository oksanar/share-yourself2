'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProductsSchema = new Schema({
    title: String,
    body: String,
    create_date: String,
    update_date: String,
    author: String,
    img: String,
    active: Boolean
});

module.exports = mongoose.model('Products', ProductsSchema);