let mongoose = require(`mongoose`);
let Schema = mongoose.Schema;

let User = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    active: Boolean,
    resetActive: String,
    resetActiveExp: Date
})

module.exports = mongoose.model(`User`, User);