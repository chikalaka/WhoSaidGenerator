/**
 * Phrase model events
 */

'use strict';

import {EventEmitter} from 'events';
import Phrase from './phrase.model';
var PhraseEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
PhraseEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Phrase.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    PhraseEvents.emit(event + ':' + doc._id, doc);
    PhraseEvents.emit(event, doc);
  }
}

export default PhraseEvents;
