var request = require("request");
var fs = require('fs');
console.log("sending request");
var req = request.get("https://sytantris.github.io/http-examples/future.jpg")
          //.on("end",function() {console.log("image downloaded")}) // one way to call callback
          .on('error', function(err){throw err;})
          .on('response', function(response){
            console.log('Downloading image...');
            console.log('Response status code:', response.statusCode);
          })
          .pipe(
            fs.createWriteStream('./future.jpg').on("finish",function() {console.log("sdsdsd downloaded")}) // another way to call a callback
          );
;