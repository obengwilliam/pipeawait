#### PipeAwait 
Compose asynchronous functions(Promises and async/await). If you are a big fun of `Ramda.pipe` and `Lodash.flow` you will love this small utilty.

>See 
> [the blog Post](https://medium.com/p/360f16a8616/edit)

#### Installation
npm install pipeawait

### The Problem
You need a simple utility to compose your functions including asynchronous functions just like you will do using lodash/flow


#### The Solution

```
npm install pipeawait  // install from npm 

const pipe = require("pipeawait")

const sync404Issues = pipe(
   find404Issues, // async function
   transform404Issues, 
   addNew404WebmasterIssues, // async function
   publishNew404Issues
)

```
