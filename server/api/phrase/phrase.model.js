'use strict';

import mongoose from 'mongoose';

var PhraseSchema = new mongoose.Schema({
    author: {
        type : mongoose.Schema.ObjectId,
        ref : 'User'
    },
    sentence: String,
    oneSaid: {
        type : mongoose.Schema.ObjectId,
        ref : 'User'
    },
    said: {
        type : mongoose.Schema.ObjectId,
        ref : 'User'
    },
    created: {         
        type: Date,   
        default: Date.now 
    }/*,
    group: {
        type : mongoose.Schema.ObjectId,
        ref : 'Group'
    }*/
});

export default mongoose.model('Phrase', PhraseSchema);
