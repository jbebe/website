---
date: "2018-10-23"
live: false
title: "Wrappers around the world: TypeScript decorator"
description: Decorators can be used for many things. Today we go full RPC.
cover: js-wrappers/typescript.jpeg
tags:
  - programming
  - javascript
---

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