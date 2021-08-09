let mongoose = require(`mongoose`);
let Schema = mongoose.Schema;

let Posts = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model(`Post`, Posts);