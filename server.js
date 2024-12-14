const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});

//Unhandled exception handling

//Adding an event listener to the process object to catch unhandled exceptions
process.on('uncaughtException', (err) => {
    console.error('An uncaught exception occurred:', err);
    //Perform cleanup or other actions before exiting
    process.exit(1);
});

//Example to trigger an unhandled exception
//setTimeout(() => {
//    throw new Error('This is an unhandled exception');
//}, 3000);