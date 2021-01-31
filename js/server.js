const { http, https } = require('follow-redirects');
const app = require('./app.js')

const hostname = '127.0.0.1';
const port = 8000;

const constants = require('./constants.js')

const server = http.createServer((req, res) => {
  const body = []
  
  res.on('error', (err) => {
    console.error(err);
    res.statusCode = 400;
    res.end();
  });

  https.get(constants.serviceA, response => {
    response.on('data', chunk => {
      body.push(chunk)
    }).on('end', () => {
      var data = Buffer.concat(body).toString()
      
      if(data.charAt(0) === '[') {
        data = JSON.parse(data)
      }
      
      const obj = app.process(data)
      
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(obj))
    })
  }).on('error', err => {
    console.error(err);
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});