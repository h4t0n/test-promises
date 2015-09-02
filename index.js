"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//-----------------------------------------
// USER SCHEMA: this is the general schema
// for the Hera 'User' resources
//-----------------------------------------
var userSchema = new Schema({
    name: String,
    age: Number
});

var User = mongoose.model('User', userSchema);


var uri = "mongodb://127.0.0.1/test-promise";

mongoose.connect(uri);


var u = new User({
    name: 'Andrea'
});
u.save()
    .then(function (val) {
        console.log(val);
        var u2 = new User({
            name: 'Mario',
            // age: "asd"
        });
        return u2.save();
    })
    .then(function (val) {
        console.log(val);
        process.exit(0);
    }, function (err) {
        console.log(err);
        process.exit(1);
    });