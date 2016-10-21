'use strict'

const expect = require('chai').expect

const pluck = require('../pluck')

describe('pluck', () => {
  it('is a function', () => {
    expect(pluck).to.be.a('function')
  })
  it('returns an array', () => {
    expect(pluck()).to.eql([])
  })
})
