var http = require('https');

function getAndPrintHTML (requestOptions) {
  data = "";

  http.get(requestOptions, function (response) {
    response.setEncoding("utf-8");
    response.on("data",function(chunk){
      data += chunk;
    });

    response.on("end", function(){
      console.log(data);
    })

  });


}

 var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

getAndPrintHTML(requestOptions);