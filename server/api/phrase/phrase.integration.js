'use strict';

var app = require('../..');
import request from 'supertest';

var newPhrase;

describe('Phrase API:', function() {

  describe('GET /api/phrases', function() {
    var phrases;

    beforeEach(function(done) {
      request(app)
        .get('/api/phrases')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          phrases = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      phrases.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/phrases', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/phrases')
        .send({
          name: 'New Phrase',
          info: 'This is the brand new phrase!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newPhrase = res.body;
          done();
        });
    });

    it('should respond with the newly created phrase', function() {
      newPhrase.name.should.equal('New Phrase');
      newPhrase.info.should.equal('This is the brand new phrase!!!');
    });

  });

  describe('GET /api/phrases/:id', function() {
    var phrase;

    beforeEach(function(done) {
      request(app)
        .get('/api/phrases/' + newPhrase._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          phrase = res.body;
          done();
        });
    });

    afterEach(function() {
      phrase = {};
    });

    it('should respond with the requested phrase', function() {
      phrase.name.should.equal('New Phrase');
      phrase.info.should.equal('This is the brand new phrase!!!');
    });

  });

  describe('PUT /api/phrases/:id', function() {
    var updatedPhrase;

    beforeEach(function(done) {
      request(app)
        .put('/api/phrases/' + newPhrase._id)
        .send({
          name: 'Updated Phrase',
          info: 'This is the updated phrase!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedPhrase = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedPhrase = {};
    });

    it('should respond with the updated phrase', function() {
      updatedPhrase.name.should.equal('Updated Phrase');
      updatedPhrase.info.should.equal('This is the updated phrase!!!');
    });

  });

  describe('DELETE /api/phrases/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/phrases/' + newPhrase._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when phrase does not exist', function(done) {
      request(app)
        .delete('/api/phrases/' + newPhrase._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
