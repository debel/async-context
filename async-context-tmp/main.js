let currentContext = null;

const AsyncContext = {
    get(name) {
        if (!currentContext) {
            throw new Error('No async context present');
        }
        return currentContext[name];
    },
    set(name, value) {
        if (!currentContext) {
            throw new Error('No async context present');
        }
        currentContext[name] = value;
    }
};

function withAsyncContext(action, context) {
    if (typeof context !== 'object') {
        throw new Error('context must be an object');
    }

    currentContext = context;
    action();
    currentContext = null;
}

const originalTimeout = window.setTimeout;

function timeoutWithContext(action, delay) {
    const capturedContext = currentContext; // Object.create(currentContext);
    originalTimeout(() => {
        currentContext = capturedContext;
        action();
        currentContext = null;
    }, delay);
}

const originalThen = Promise.prototype.then;

function thenWithContext(callback) {
    const capturedContext = currentContext; // Object.create(currentContext);
    return originalThen.call(this, (arg) => {
        currentContext = capturedContext;
        const result = callback(arg);
        currentContext = null;
        return result;
    });
}

Promise.prototype.then = thenWithContext;

window.setTimeout = timeoutWithContext;

export { withAsyncContext, AsyncContext };