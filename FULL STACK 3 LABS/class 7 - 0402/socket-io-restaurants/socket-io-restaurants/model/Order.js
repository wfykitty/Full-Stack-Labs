const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    orderId: {
        type: String,
        require: true
    },

    item:{
        type: String,
        require: true
    },
    customer_name: {
        type: String,
        default: true
    }
});

const Order = mongoose.model('Order', OrderSchema, 'Orders');

module.exports = Order;

 