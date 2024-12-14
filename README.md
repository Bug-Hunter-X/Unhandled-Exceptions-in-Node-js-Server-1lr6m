# Node.js Unhandled Exception Handling

This repository demonstrates how to handle unhandled exceptions in a Node.js server.  Unhandled exceptions can lead to unexpected crashes and are difficult to debug.  This example shows both how an unhandled exception might occur and how to gracefully handle such errors.

## Unhandled Exception Scenario:

The `server.js` file contains a simple HTTP server.  The commented-out `setTimeout` function demonstrates how an unhandled exception might arise in a real-world application. When uncommented and the server is run, the server will crash after 3 seconds.

## Solution:

The `serverSolution.js` shows how to use the `process.on('uncaughtException', ...)` event listener to catch and handle unhandled exceptions, logging the error and exiting gracefully.  This prevents a silent crash and provides valuable information for debugging.