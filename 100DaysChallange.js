"use strict";
// Example using Promise.all to wait for multiple
// promises to resolve
Object.defineProperty(exports, "__esModule", { value: true });
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((reject, resolve) => {
    setTimeout(reject, 100, "foo");
});
Promise.all([promise1, promise3, promise2]).then((values) => {
    console.log(values); // Outputs: [3, 42, "foo"]
});
// This demonstrates how Promise.all waits for all
// promises to resolve and then logs the array of their results.
