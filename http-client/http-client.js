var http = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  http.get(requestOptions, function (response) {
    response.setEncoding("utf-8");
    response.on("data",function(chunk){
      console.log(chunk, '/n');
    });
  });
  /* Add your code here */

}

getAndPrintHTMLChunks();