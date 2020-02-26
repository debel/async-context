import { withAsyncContext, AsyncContext } from './main.js';


function logThenLogContext() {
    console.log('here');
    const a = AsyncContext.get('a');
    console.log('context a is', a);
}

function logFromContext() {
    const a = AsyncContext.get('a');

    console.log({ a });
}

function modifyContextThenLog() {
    const a = AsyncContext.get('a');

    AsyncContext.set('a', a * 2);

    setTimeout(logFromContext, 3000);
}

const logResultAndContext = fromContext => (result) => {
    const context = AsyncContext.get(fromContext);

    console.log({ [fromContext]: context, result });
}

function main(a, b) {
    withAsyncContext(() => {
        setTimeout(logFromContext, 5000);
        setTimeout(modifyContextThenLog, 3000);
        delay(8000).then(() => 'XXX').then(logResultAndContext('a'));
    }, { a });

    withAsyncContext(() => {
        delay(8000).then(() => 'YYY').then(logResultAndContext('b'));
    }, { b });

    setTimeout(logFromContext , 4000);
}

function x() {
    console.log(AsyncContext.get('a'));
}

const delay = ms => Promise.resolve();


main(10, 20);