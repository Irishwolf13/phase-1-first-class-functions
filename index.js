const receivesAFunction = (callback) => callback();

const myCallBack = () => console.log("Iran")

const returnsANamedFunction = () => function namedFunction() { console.log("Iran") }

const returnsAnAnonymousFunction = () => function () { console.log("Iran") }