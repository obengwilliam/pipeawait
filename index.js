'use strict'

module.exports = (...fns) => param => fns.reduce(async (result, next) => next(await result), param)
