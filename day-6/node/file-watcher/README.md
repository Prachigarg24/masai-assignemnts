Day 6: Node.js Core Modules & Event Emitter

1. What are core modules in Node.js? Name at least 10.

Core modules are built-in modules provided by Node.js.
They are available by default and do not require installation using npm.

They help developers perform common tasks such as file handling, networking, system operations, and process management.

Examples of Node.js core modules:

fs

path

http

https

os

events

url

crypto

stream

buffer

child_process

cluster

2. Explain the fs module. What is the difference between fs and fs/promises?

The fs (File System) module is used to read, write, update, delete, and watch files and directories in Node.js.

The standard fs module supports:

Synchronous methods

Asynchronous methods using callbacks

fs/promises is a modern API that provides the same functionality but returns Promises instead of using callbacks, making it easier to write clean asynchronous code with async/await.

Difference:

fs	fs/promises
Callback-based async methods	Promise-based
Older style	Modern and recommended
Harder to manage callbacks	Cleaner async/await syntax
3. What is the path module used for?

The path module is used to work with file and directory paths in a platform-independent way.

It ensures that paths work correctly across different operating systems like Windows, Linux, and macOS.

Common uses include:

Joining paths safely

Resolving absolute paths

Getting file names and extensions

Normalizing paths

4. Explain the EventEmitter class. How do you use it?

EventEmitter is a class from the events module that enables event-driven programming in Node.js.

It allows objects to:

Emit named events

Attach listeners to respond when events occur

Usage flow:

Create a class that extends EventEmitter

Register listeners using on() or once()

Emit events using emit()

This model is widely used in Node.js core modules.

5. Difference between on() and once() in EventEmitter?

on() registers a listener that executes every time the event is emitted.

once() registers a listener that executes only once and is automatically removed after execution.

6. How does error handling work with EventEmitters?

EventEmitters use a special event called error for handling errors.

If an error event is emitted and no listener is attached, Node.js will terminate the process.

Best practice:
Always attach an error listener to prevent application crashes.

7. What is the cluster module? Why is it used?

The cluster module allows Node.js to utilize multiple CPU cores by creating worker processes.

Each worker runs on a separate core while sharing the same server port.

Why use cluster?

Improve application performance

Handle high traffic efficiently

Avoid single-thread limitations

8. What are child processes? When should you use them?

Child processes allow Node.js to execute external commands or scripts outside the main event loop.

They are used when:

Performing CPU-intensive tasks

Running system-level commands

Preventing the main thread from blocking

9. Difference between spawn, exec, and fork
Method	Purpose
spawn	Executes a command and streams output
exec	Executes a command and buffers output
fork	Creates a Node.js child process with IPC

spawn is suitable for large data streams

exec is best for small commands

fork is used when parent and child processes need communication