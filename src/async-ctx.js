const contexts = [];

let currentContext;

const AsyncContext = {
  get(key) {
    return currentContext && contexts[currentContext] && contexts[currentContext][key];
  },
  set(key, value) {
    if (!currentContext) {
      currentContext = contexts.length;
      contexts[currentContext] = {};
    }

    contexts[currentContext][key] = value;
  },
};

const timeoutWithContext = (action, timeout) => {
  const capturedContext = currentContext;
  setTimeout(() => {
    const latestContext = currentContext;
    currentContext = capturedContext;
    action();
    currentContext = latestContext;
  }, timeout);
};

const asyncAction = () => {
  const a = AsyncContext.get('a');
  
  console.log('a is', a);
};

function main() {
  AsyncContext.set('a', 1);
  
  timeoutWithContext(asyncAction, 1000);
}