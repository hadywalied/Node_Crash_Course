const path = require('path');

//bast file name 
console.log(path.basename(__filename));

//Directory name
console.log(path.dirname(__filename));

//file extension
console.log.apply(path.extname(__filename));

//create path object
console.log(path.parse(__filename));

//concatenate paths
console.log(path.join(__dirname,'test', 'hello.html'));