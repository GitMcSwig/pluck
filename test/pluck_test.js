'use strict'

const expect = require('chai').expect

const pluck = require('../pluck')

describe('pluck', () => {
  it('is a function', () => {
    expect(pluck).to.be.a('function')
  })
  it('given an array returns an array', () => {
    expect(pluck([])).to.eql([])
  })
  it("given [{foo: 'bar'}], 'foo' returns ['bar']", () => {
    expect(pluck([{foo: 'bar'}],'foo')).to.eql(['bar'])
  })
  it("given [{foo: 'ski'}], 'foo' returns ['ski']", () => {
    expect(pluck([{foo: 'ski'}],'foo')).to.eql(['ski'])
  })
  it("given [{foo: 'bar'}, {foo: 'ski'}], 'foo' returns ['bar', 'ski']", () => {
    expect(pluck([{foo: 'bar'}, {foo: 'ski'}], 'foo')).to.eql(['bar', 'ski'])
  })
})
