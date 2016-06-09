/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Feedback from '../api/feedback/feedback.model';
import Group from '../api/group/group.model';
import Phrase from '../api/phrase/phrase.model';


var user1 = new User({
    provider: 'local',
    name: 'Edan (not admin)',
    email: 'e@g',
    password: '123',
    gender: true,
    score: 100
});

var user2 = new User({
    provider: 'local',
    role: 'admin',
    name: 'Admininoo',
    email: 'a@a',
    password: 'admin',
    gender: false,
    score: 300
});

var user3 = new User({
    provider: 'local',
    name: 'Yael (not admin)',
    email: 'e@e',
    password: '123',
    gender: false,
    score: 70
});

/*
var phrase1 = new Phrase({
    author: user1._id,
    sentence: 'You are funny (2 to 3)',
    oneSaid: user2._id,
    said: user3._id
});

var phrase2 = new Phrase({
    author: user1._id,
    sentence: 'hehe bla bla (2 to 3)',
    oneSaid: user2._id,
    said: user3._id
});

var phrase3 = new Phrase({
    author: user2._id,
    sentence: 'lalala (3 to 1)',
    oneSaid: user3._id,
    said: user1._id
});

Phrase.find({}).remove()
    .then(() => {
    Phrase.create(phrase1, phrase2, phrase3)
        .then(() => {
        console.log('finished populating feedbacks');
    });
});
*/

var fb1 = new Feedback({
    subject: 'subject 1',
    feedbackBody: 'Test User', 
    author: user1._id
});

var fb2 = new Feedback({
    subject: 'subject 2',
    feedbackBody: 'Test Admin',
    author: user2._id
});

Feedback.find({}).remove()
    .then(() => {
    Feedback.create(fb1, fb2)
        .then(() => {
        console.log('finished populating feedbacks');
    });
});


var group1 = new Group({
    name: 'laliboo',
    users: [user1._id, user2._id],
    phrases: [
        {
            author: user1._id,
            sentence: 'You are funny (2 to 3)',
            oneSaid: user2._id,
            said: user3._id
        },
        {
            author: user1._id,
            sentence: 'hehe bla bla (2 to 3)',
            oneSaid: user2._id,
            said: user3._id
        },
        {
            author: user2._id,
            sentence: 'lalala (3 to 1)',
            oneSaid: user3._id,
            said: user1._id
        }      
    ]
});

var group2 = new Group({
    name: 'tootim',
    users: [user1._id, user3._id],
    phrases: [
        {
            author: user1._id,
            sentence: 'You are funny (2 to 3)',
            oneSaid: user2._id,
            said: user3._id
        },
        {
            author: user1._id,
            sentence: 'hehe bla bla (2 to 3)',
            oneSaid: user2._id,
            said: user3._id
        }]
});


Group.find({}).remove()
    .then(() => {
    Group.create(group1, group2)
        .then(() => {
        console.log('finished populating feedbacks');
    });
});


// here we are refactoring the users in order to fill the groups (and the users)

user1 = {
    role: 'user',
    score: 100,
    _id: user1._id,
    gender: true,
    password: '123',
    email: 'e@g',
    name: 'Edan (not admin)',
    provider: 'local',
    groups: [group1._id, group2._id]
};

user2 = {
    _id: user2._id,
    provider: 'local',
    role: 'admin',
    name: 'Admininoo',
    email: 'a@a',
    password: 'admin',
    gender: false,
    score: 300,
    groups: [group1._id, group2._id]
};

user3 = {
    _id: user3._id,
    provider: 'local',
    name: 'Yael (not admin)',
    email: 'e@e',
    password: '123',
    gender: false,
    score: 70,
    groups: [group1._id]
};

User.find({}).remove()
    .then(() => {
    User.create(
        user1, user2, user3
    )
        .then(() => {
        console.log('finished populating users');
    });
});

/*
Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    });
  });
*/