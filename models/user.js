var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

//schema for passport local mongoose
var User = new Schema({
    firstname: {
        type: String,
          default: ''
    },
    lastname: {
        type: String,
          default: ''
    },
    admin:   {
        type: Boolean,
        default: false
    }
});

User.plugin(passportLocalMongoose);

// mongoose schema
// var User = new Schema({
//     username: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password:  {
//         type: String,
//         required: true
//     },
//     admin:   {
//         type: Boolean,
//         default: false
//     }
// });

module.exports = mongoose.model('User', User);