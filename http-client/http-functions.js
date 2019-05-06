var http = require('https');

module.exports = function getHTML (options, callback) {
 data = "";

  http.get(options, function (response) {
    response.setEncoding("utf-8");
    response.on("data",function(chunk){
      data += chunk;
    });

    response.on("end", () => callback(data));


  });
}
