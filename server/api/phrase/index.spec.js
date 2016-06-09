'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var phraseCtrlStub = {
  index: 'phraseCtrl.index',
  show: 'phraseCtrl.show',
  create: 'phraseCtrl.create',
  update: 'phraseCtrl.update',
  destroy: 'phraseCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var phraseIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './phrase.controller': phraseCtrlStub
});

describe('Phrase API Router:', function() {

  it('should return an express router instance', function() {
    phraseIndex.should.equal(routerStub);
  });

  describe('GET /api/phrases', function() {

    it('should route to phrase.controller.index', function() {
      routerStub.get
        .withArgs('/', 'phraseCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/phrases/:id', function() {

    it('should route to phrase.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'phraseCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/phrases', function() {

    it('should route to phrase.controller.create', function() {
      routerStub.post
        .withArgs('/', 'phraseCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/phrases/:id', function() {

    it('should route to phrase.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'phraseCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/phrases/:id', function() {

    it('should route to phrase.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'phraseCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/phrases/:id', function() {

    it('should route to phrase.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'phraseCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
