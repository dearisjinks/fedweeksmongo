import { stringify } from "querystring";

var mongoose =require('mongoose');

var Tasks = mongoose.model('MyTesting App', {
    taskName: {
        type: string,
        required: true,
        minLength:5,
        trim: true
    },
    completed: {
            type: Boolean,
            default: false
    }
}, 'MyTestingApp');

module.exports = {Tasks}