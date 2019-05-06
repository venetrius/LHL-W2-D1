var http = require('https');

function getHTML (options, callback) {
 data = "";

  http.get(requestOptions, function (response) {
    response.setEncoding("utf-8");
    response.on("data",function(chunk){
      data += chunk;
    });

    response.on("end", () => callback(data));


  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);