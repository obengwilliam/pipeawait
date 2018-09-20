'use strict'

const asyncPipe = require('./index')
const { expect } = require('chai')

const resolveTo = num => Promise.resolve(num || 2)
const add1 = num => Promise.resolve(num + 1)

const asyncResolveTo = async num => {
  const result = await resolveTo(num)
  return result
}

const asyncAdd1 = async num => {
  const result = await add1(num)
  return result
}

describe('Async await pipe', () => {
  it('should compose promise functions together', () => {
    const add1To2 = asyncPipe(resolveTo, add1)

    return add1To2().then(result => expect(result).to.equal(3))
  })

  it('should return "Promise"', () => {
    const add1To2 = asyncPipe(resolveTo, add1)(2)

    expect(add1To2).to.be.a('Promise')
  })

  it('should pass first param to first function', () => {
    const add1To3 = asyncPipe(resolveTo, add1)

    return add1To3(3).then(result => expect(result).to.equal(4))
  })

  it('should compose async functions', async () => {
    const add1To3 = asyncPipe(asyncResolveTo, asyncAdd1)
    const result = await add1To3(3)
    expect(result).to.equal(4)
  })
})
