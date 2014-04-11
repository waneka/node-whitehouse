var assert = require('assert')
  , should = require('should')
  , sinon = require('sinon')
  , wh = require('../lib/WhiteHouse')
  , whApi = wh.createWhiteHouse()

describe('getPetitions()', function() {
  // beforeEach()
  describe('called with one argument (a callback)', function() {
    it('should call the function apiCall', function() {
      var stub = sinon.stub(whApi, 'apiCall')

      function cb(output) {
        //do something with the output
      }

      whApi.getPetitions(cb)
      assert(stub.called)
      whApi.apiCall.restore()
    })
  })
  describe('called with two arguments (params and a callback)', function() {
    it('should call the function apiCall', function() {
      var stub = sinon.stub(whApi, 'apiCall')

      function cb(output) {
        //do something with the output
      }

      whApi.getPetitions({'created_after':Math.floor(new Date().getTime()/1000)}, cb)
      assert(stub.called)
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
