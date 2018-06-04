'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    name: {
        type: String,
        required: 'Kindly enter the name of the task'
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    },
    new_field: {
        type: String,
        default: 'New field? Do I need to update existing data.'
    },
    new_field_no_default: String
});

module.exports = mongoose.model('Tasks',TaskSchema);