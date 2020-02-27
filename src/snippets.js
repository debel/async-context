
export const pythonThreadLocals = {
  language: 'python',
  code:
`  # python
  import threading
  threadContext = threading.local()
  threadContext.myVariable = "some value"`
};

export const javaThreadLocals = {
  language: 'java',
  code:
`  // java
  private static ThreadLocal<Integer> threadLocal = new ThreadLocal<>();
  threadLocal.set(42);
  Integer actualValue = threadLocal.get();`
}

export const clickTimeout =
`  button.addEventListner('click', handleClick);
  function handleClick() {
    setTimeout(afterASecond, 1000);
  }
  
  function afterASecond() {
    // no idea who called me and why
  }`;

export const simpleParameters =
` function first(param) {
    second(param);
  }

  function second(param) {
    third(param);
  }

  function third(param) {
    console.log(param);
  }`;

export const magic =
`  function first() {
    second();
  }

  function second() {
    third();
  }

  function third() {
    const param = MAGIC.get('param');
    console.log(param);
  }`;

export const globalScope =
`  // DON'T USE GLOBALS... 😨
  global.MAGIC = new Map();

  MAGIC.set('param', 42);
  setTimeout(first, 5000); // logs 'wat?'

  MAGIC.set('param', 'wat?');
  setTimeout(first, 2000); // logs 'wat?'`;

export const lexicalScope =
  `  function lexical(param) {
      function first() { second(); }
      function second() { third(); }
      function third() { console.log(param); }

      first();
  }`;

export const usingLexical =
`setTimeout(lexical(42), 5000);
 // logs 42

 setTimeout(lexical('wat?'), 2000);
 // logs 'wat?'
`;

export const zones1 =
`  Zone.current
    .fork({ name: 'zoneA', properties: { param : 42 }})
    .run(asyncThread); // logs 42

  Zone.current
    .fork({ name: 'zoneB', properties: { param : 'wat?' }})
    .run(asyncThread); // logs 'wat?'`;

export const zoneThread =
`  function asyncThread() {
    setTimeout(firstStep, 1000);
  }

  function firstStep() {
    Promise.resolve().then(lastStep);
  }

  function lastStep() {
    console.log(Zone.current.get('param'));
  }`;

export const monkeyPatching =
`  const originalSetTimeout = window.setTimeout;

  window.setTimeout = function(callback, delay) {
    const capturedZone = Zone.current;

    return originalSetTimeout(() => {
      const restoreZone = Zone.current;
      Zone.current = capturedZone;
      callback();
      Zone.current = restoreZone;
    }, delay);
  }`;

export const asyncHooks1 =
`  const async_hooks= require('async_hooks');

  const asyncHook = async_hooks.createHook({
    init, before, after, destroy, promiseResolve
  });

  asyncHook.enable(); // start listening for asynchronous events

  asyncHook.disable(); // stop listening for new asynchronous events`;

export const asyncHooks2 =
`function init(asyncId, type, triggerAsyncId, resource) { }

function before(asyncId) { }

function after(asyncId) { }

function destroy(asyncId) { }

function promiseResolve(asyncId) { }`;

export const asyncHooksContext =
`  const cls = require('node-cls'); // based on async-hooks
 
  server.get('/', (req, res) => {
    const context = cls.create('request-context');
    context.request = req;
    context.response = res;
    context.run(doWork);
  });
 
  function doWork() {
    let context = cls.get('request-context');
    context.response.send(someData);
  }`;