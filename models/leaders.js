//****************Assignment-2******************/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require ('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const leaderSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true,
        unique: true
    },
    abbr: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        default:false      
    },
    description: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

var Leaders = mongoose.model('leader', leaderSchema);

module.exports = Leaders;