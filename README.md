#### AsyncPipe
Performs left-to-right composition of one or more Promise-returning functions.All functions should be unary

#### Installation
npm install @kudobuzz/asyncpipe

#### Usage

```
const asyncPipe = require('@kudobuzz/asyncpipe')


const resolveTo = num => Promise.resolve(num || 2)


const add1 = num => Promise.resolve(num + 1)


const asyncResolveTo = async num => {
  const result = await resolveTo(num)
  return result
}

const add1To2 = asyncPipe(resolveTo, add1)(2) // initalvalue 2 is optional

->resolveTo(2) -> add

```
