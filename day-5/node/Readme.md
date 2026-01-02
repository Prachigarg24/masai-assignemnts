Node.js Fundamentals 
1. What is Node.js? How does it differ from browser JavaScript?

Node.js is a JavaScript runtime environment built on the Chrome V8 engine. It allows JavaScript to run outside the browser, mainly on the server side.

Browser JavaScript is primarily used to interact with the DOM and handle user interface events, whereas Node.js is used for building backend applications such as APIs, servers, and command-line tools. Node.js provides system-level APIs like file handling, networking, and process management, which are not available in the browser.

2. What is the event loop in Node.js? How does it work?

The event loop is the core mechanism that allows Node.js to perform non-blocking asynchronous operations. It continuously checks the call stack and processes pending tasks from different queues.

When an asynchronous operation is initiated, it is offloaded to the system. Once the operation completes, its callback is placed in the appropriate queue. The event loop then pushes the callback to the call stack when it becomes empty, ensuring smooth execution without blocking the main thread.

3. What is non-blocking I/O? How does Node.js achieve it?

Non-blocking I/O means that the program does not pause execution while waiting for input/output operations like file reading or network requests to complete.

Node.js achieves non-blocking I/O using asynchronous APIs, the event loop, and a background thread pool managed by libuv. This allows Node.js to handle multiple operations efficiently without waiting for each one to finish.

4. Explain the difference between synchronous and asynchronous code.

Synchronous code executes tasks one after another, blocking the execution until the current task is completed. This approach can slow down applications, especially during I/O operations.

Asynchronous code allows long-running tasks to run in the background. The program continues executing other tasks and handles the result once the operation is complete, improving performance and scalability.

5. What are callbacks? What is callback hell?

Callbacks are functions passed as arguments to other functions and executed after an asynchronous task completes.

Callback hell occurs when multiple callbacks are nested inside each other, making the code difficult to read, debug, and maintain. It often results in complex and messy code structures.

6. What are Promises? How do they solve callback hell?

A Promise represents the eventual result of an asynchronous operation. It can be in one of three states: pending, fulfilled, or rejected.

Promises help solve callback hell by allowing asynchronous operations to be chained using .then() and .catch(), which makes the code more readable and easier to manage compared to deeply nested callbacks.

7. What is async/await? How does it work internally?

Async/await is a modern syntax built on top of Promises that makes asynchronous code look and behave like synchronous code.

Internally, the async keyword makes a function return a Promise, and await pauses the execution of that function until the Promise is resolved or rejected, without blocking the main thread.

8. What is the difference between process.nextTick() and setImmediate()?

process.nextTick() schedules a callback to be executed immediately after the current operation completes, before the event loop continues to the next phase.

setImmediate() schedules a callback to run in the check phase of the event loop, after I/O events have been processed. As a result, process.nextTick() has higher priority and should be used carefully.

9. What are streams in Node.js? Name the types of streams.

Streams are objects that allow data to be processed in small chunks instead of loading the entire data into memory at once.

There are four main types of streams in Node.js:

Readable streams

Writable streams

Duplex streams

Transform streams

Streams are especially useful when working with large files or continuous data flow.

10. What is the Buffer class in Node.js?

The Buffer class is used to handle binary data directly in memory. Since JavaScript does not natively support binary data, Node.js provides Buffer to work with raw data streams, files, and network operations.

Buffers are commonly used in file handling, streaming, and TCP/UDP communication.
