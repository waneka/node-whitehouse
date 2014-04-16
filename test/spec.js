var assert = require('assert')
  , should = require('should')
  , sinon = require('sinon')
  , wh = require('../lib/WhiteHouse')
  , whApi = wh.createWhiteHouse()

describe('getSignatures()', function() {
  describe('called with 2 arguments (petition & callback)', function() {
    it('should call the function apiCall', function() {
      var stub = sinon.stub(whApi, 'apiCall')

      whApi.getSignatures('fakePetition', 'fakeCallback')
      stub.called.should.be.true

      whApi.apiCall.restore()
    })
  })
  describe('called with three arguments (petition, params, & callback)', function() {
    it('should call the function apiCall', function() {
      var stub = sinon.stub(whApi, 'apiCall')

      whApi.getSignatures('fakePetition', 'fakeParams', 'fakeCallback')
      stub.called.should.be.true

      whApi.apiCall.restore()
    })
  })
  describe('called with the wrong number of arguments', function() {
    it('should throw and error', function() {
      var stub = sinon.stub(whApi, 'apiCall')

      whApi.getSignatures.bind(null).should.throw()
      whApi.getSignatures.bind(null, 'fakePetition', 'fakeParams', 'fakeCallback', 'extraArg').should.throw()

      whApi.apiCall.restore()
    })
  })
})

describe('getPetitions()', function() {
  describe('called with one argument (a callback)', function() {
    it('should call the function apiCall', function() {
      var stub = sinon.stub(whApi, 'apiCall')

      function cb(output) {
        //do something with the output
      }

      whApi.apiCall.restore()
    })
  })
  describe('called with two arguments (params and a callback)', function() {
    it('should call the function apiCall', function() {
      var stub = sinon.stub(whApi, 'apiCall')

      function cb(output) {
        //do something with the output
      }

      whApi.apiCall.restore()
    })
  })
  describe('called with zero arguments', function() {
    it('should throw an error', function() {
      function cb() {}

      whApi.getPetitions().should.throw()
      // argh...
    })
  })
})
