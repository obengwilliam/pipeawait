#### PipeAwait 
Compose asynchronous functions(Promises and async/await). If you are a big fun of `Ramda.pipe` and `Lodash.flow` you will love this small utilty.

#### Installation
npm install pipeawait

#### Usage

```
const asyncPipe = require('pipeawait')


const substract1 = num => Promise.resolve(num - 2)


const add1 = num => Promise.resolve(num + 1)

const add1multiply2 = async (num)=>{
 const numplus2 = await add1(num)
 return numplus2 *3
 }

const asyncResolveTo = async num => {
  const result = await resolveTo(num)
  return result
}

const add1To2andMultiply = asyncPipe(add1, subsctract1, add1multiply2)

>>> add1ToMultiply(2).then(console.log.bind(console.log))
>>> 6

```
