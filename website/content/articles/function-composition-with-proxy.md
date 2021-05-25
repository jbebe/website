---
date: "2020-11-21"
live: false
title: "Variations on a Theme: Proxy object"
description: Let's use the Proxy object to compose functions and register event handlers.
cover: proxy/function-composition.png
tags:
  - programming
  - javascript
---

## What is a Proxy?

Firstly, please refer to the documentation: [\[link\]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy).

Secondly, Proxy is a very weird concept. It basically wraps an `Object` and works as a proxy to communicate with said object. 
What makes it a very versatile tool is that the connection between the underlying object and the Proxy is loose.

So what makes Proxy weird? The interface of course. Technically you have 


 
```js
λ = (_function) =>
  new Proxy(_function, (() => {
    let currFn = x => _function(x);
    return {
      get: (target,  prop, receiver) => {
        const nextFn = window[prop]
        let oldFn = currFn
        currFn =  x => nextFn(oldFn(x))
        return receiver
      },
      apply: (target, prop, args) => currFn(args[0]),
    }
  })())

lower = λ(x => x.toLowerCase())
trim = λ(x => x.trim())
double = λ(x => x + x)
vowel = λ(x => x.replace(/[^aeiou]/ig, ''))

(lower . trim . vowel . double)(' ABCDEFGH ')
```

```js

export function RemoteAction() {
  return (methodObj, methodName: string, descriptor: PropertyDescriptor) => {

    Assert.True(methodName.endsWith('Async'));

    const remoteMethodName = methodName.substr(0, methodName.length - 'Async'.length);
    descriptor.value = async function (...args: any[]): Promise<void> {
      return (<HubConnection>this.connection).send(
        remoteMethodName,
        ...args.map((e) => {
          if (typeof(e) === 'object') {
            return JSON.stringify(e);
          } else {
            return e;
          }
        }));
    };
  };
}

@RemoteAction()
  public async RegisterAsync(user: UserEntity) {
  }

```