'use strict';

import mongoose from 'mongoose';

var FeedbackSchema = new mongoose.Schema({
  subject: String,
  feedbackBody: String,
    date: { 
        type: Date, 
        default: Date.now 
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

export default mongoose.model('Feedback', FeedbackSchema);
