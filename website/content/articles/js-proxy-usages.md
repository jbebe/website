---
date: "2020-11-21"
live: true
title: "Wrappers around the world: The Proxy object"
description: Let's use the Proxy object to compose functions and register event handlers.
cover: js-wrappers/function-composition.png
tags:
  - programming
  - javascript
---

## What is a Proxy?

Firstly, please refer to the documentation: [\[link\]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

Secondly, Proxy is a very weird concept. It basically works as a wrapper for an `Object` and can mutate it by overriding JS operators. You heard it right. Proxy not only implements a proxy between your object and its interface but **it is the only way to do operator overloading** in JS. 

We have the following operators to overload:
| Overridden symbol | Example                           |
|-------------------|-----------------------------------|
| `()`              |`proxy(arg1, arg2, ...)`           |
| `.`               |`proxy.prop`                       |
| `. =`             |`proxy.prop = 'modified value'`    |
| `. = `            | `proxy.newProp = 'new prop value'`|
| `new`             |`new proxy()`                      |
| `delete`          |`delete proxy.prop`                |
| `in`              |`'prop' in proxy`                  |

Some people may argue that we should even use Proxy because of the overloading behavior but I think as a library developer you **can** use any tool that's available for you.

# Example 1: Function composition

Composing functions in math is the equivalent of chaining functions in programming.
You have `f` and `g`, then you call `g(f(x))`. Now a composition is the same but in form they are separated from their arguments: `(g ◦ f)(x)` In a programming language that supports functional programming (like [Haskell](https://wiki.haskell.org/Function_composition)) this makes it easier to read or alias compositions as they are packed together.

Now we know that `+` cannot be overloaded but `.` looks pretty similar to `◦` so that's what we're going to use as the composition operator.

First, let's create a prototype. One Proxy with the appropriate operator overloaded.

```js
var double = x => x+x
var proxyDouble = new Proxy(double, {
  get: (currentFn,  nextFnName, proxySelf) => {
    return nextFnName
  }
})
proxyDouble . proxySqroot
// Output: "proxySqroot"
```

After logging the arguments of get, we can finally understand how to put this together.

`a . b . c` is evaluated from left to right but we need to execute the functions in reverse order to follow the rule of composition. So every time `get` is called we need to push the current function down a stack and make the new function/property call the current one.

First, we need to get rid of the hardcoded `double` in the Proxy parameter and create the square-root function:

```js
var _double = x => x+x
var _sqrt = x => Math.sqrt(x)
var createProxy = (fn) => 
  new Proxy(fn, {
    get: (currentFn,  nextFnName, proxySelf) => {
      return nextFnName
    }
  })
var double = createProxy(_double)
var sqrt = createProxy(_sqrt)
```

As this is just an execise we will rely on window to get the next function object but of course we could use other methods to store them for the Proxy. The `get` method will look like this:

```js
...
get: (currentFn,  nextFnName, proxySelf) => {
  const nextFn = window[nextFnName]
  return createProxy(x => currentFn(nextFn(x)))
}
...
```

Now `g . f` works exactly like the mathematical representation, `g ◦ f`. Now we just need to call it. Something missing for the function call right? You have to add the `apply` method to the Proxy handler. The final code with some syntactic sugar will look like this:

```js
_double = x => x+x
_sqrt = x => Math.sqrt(x)
λ = (fn) => 
  new Proxy(fn, {
    get: (currentFn,  nextFnName, proxySelf) => {
      const nextFn = window[nextFnName]
      return λ(x => currentFn(nextFn(x)))
    },
    apply: (currentFn, prop, args) => currentFn(...args)
  })
double = λ(_double)
sqrt = λ(_sqrt)

(sqrt . double . double . double)(2)
(double . double)('ABC')
// Outputs: 
// 4
// ABCABCABCABC
```

So here's how you force FP paradigms on JS. :)