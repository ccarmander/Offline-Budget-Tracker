const mongoose = require('mongoose')

const { Schema } = mongoose;

const transaction = new Schema({
    name: { 
        type: String,
        trim: true,
        required: 'Enter a name for your transaction',
    },
    value: {
        type: Number,
        required: 'Enter the transaction amount',
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Transaction = mongoose.model('Transaction', transaction);
module.exports = Transaction;