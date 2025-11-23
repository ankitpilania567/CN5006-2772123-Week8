const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },
    age: Number, Gender: String, Salary: Number
});

const Person = mongoose.model('Person', PersonSchema, 'personCollection');

module.exports = Person;
