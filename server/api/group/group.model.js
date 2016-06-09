'use strict';

import mongoose from 'mongoose';

function validateLength (v) {
    // a custom validation function for checking string length to be used by the model
    return v.length <= 15;
}

var GroupSchema = new mongoose.Schema({
    created: {         
        type: Date,   
        default: Date.now 
    },
    name: {
        type: String,
        unique : true,
        required: 'name cannot be blank',
        validate: [validateLength, 'name must be 15 chars in length or less']
    },
    users: [ 
        {
            type : mongoose.Schema.ObjectId,
            ref : 'User'
        } 
    ],
    phrases: [ 
        {
            author: {
                type : mongoose.Schema.ObjectId,
                ref : 'User'
            } ,
            sentence: String,
            oneSaid: {
                type : mongoose.Schema.ObjectId,
                ref : 'User'
            } ,
            said: {
                type : mongoose.Schema.ObjectId,
                ref : 'User'
            } 
        } 
    ]
});

export default mongoose.model('Group', GroupSchema);
