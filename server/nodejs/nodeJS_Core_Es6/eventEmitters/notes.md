# Events 

Much of the `Node.js` core API is built around an idiomatic `asynchronous event-driven architecture` in which certain kinds of `objects (called "emitters") `emit named `events` that cause `Function objects ("listeners")` to be called.

All objects that emit events are instances of the `EventEmitter class`

These objects expose an `eventEmitter.on()` function that allows one or more functions to be attached to named events emitted by the object. 

Typically, `event` names are `camel-cased strings` but any valid `JS property key` can be used.

When the `EventEmitter` object `emits` an event, all of the `functions` attached to that specific event are called `synchronously`. Any `values` returned by the called `listeners` are `ignored` and discarded.


The following example shows a simple `EventEmitter instance` with a 
`single listener.` `The eventEmitter.on()` method is used to `register listeners`, while the `eventEmitter.emit()` method is used to `trigger` the event.

```js
import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');

```


# Passing arguments and `this` to listeners

The `eventEmitter.emit() `method allows an `arbitrary` set of arguments to be passed to the `listener functions`. Keep in mind that when an ordinary listener function is called, the standard `this` keyword is intentionally set to reference the `EventEmitter` instance to which the listener is attached.

```js
const myEmitter = new MyEmitter();
myEmitter.on('event', (a, b) => {
  console.log(a, b, this, this === myEmitter);
  // Prints:
  //   a b MyEmitter {
  //     domain: null,
  //     _events: { event: [Function] },
  //     _eventsCount: 1,
  //     _maxListeners: undefined } true
});
myEmitter.emit('event', 'a', 'b');
```

# Asynchronous vs. synchronous

The `EventEmitter` calls all `listeners` `synchronously` in the order in which they were registered. This ensures the proper sequencing of events and helps avoid race conditions and logic errors. When appropriate, listener functions can switch to an `asynchronous` mode of operation using the `setImmediate()` or `process.nextTick()` methods:

```js

myEmitter.on('event', (a, b) => {
  setImmediate(() => {
    console.log('this happens asynchronously');
  });                                                                                  
});
myEmitter.emit('event', 'a', 'b');

```


# Handling events only once

When a `listener` is `registered` using the `eventEmitter.on()` method, that listener is `invoked` every time the named event is `emitted`.

```js
const myEmitter = new MyEmitter();
let m = 0;
myEmitter.on('event', () => {
  console.log(++m);
});
myEmitter.emit('event');
// Prints: 1
myEmitter.emit('event');
// Prints: 2
```


## Using the eventEmitter.once() method,

 it is possible to `register` a listener that is called `at most once` for a particular event. Once the event is emitted, the listener is unregistered and then called.

```js
const myEmitter = new MyEmitter();
let m = 0;
myEmitter.once('event', () => {
  console.log(++m);
});
myEmitter.emit('event');
// Prints: 1
myEmitter.emit('event');
// Ignored```