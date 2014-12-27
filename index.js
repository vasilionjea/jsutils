// Node JS playground
// 1. Navigate to this directory via your command line.
// 2. Type in: `node`
// 3. Type in: `require('./index')` 
var u = require('./src/u');
u.string = require('./src/u.string');
u.number = require('./src/u.number');
u.date = require('./src/u.date');

[u, u.string, u.number, u.date].forEach(function(obj) {
  console.log(Object.keys(obj));
})
