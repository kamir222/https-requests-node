var https = require("https");

var requestOptions = {
  host: process.argv[2],
  path: process.argv[3]
};


function getAndPrintHTML (options) {
  var dataChunks = [];
  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {
      dataChunks.push(data);
    });

    response.on('end', function(){
      for (var i = 0; i < dataChunks.length; i++) {
        console.log(dataChunks[i]);
      }
      console.log('Response stream complete.');
    });
});

}

getAndPrintHTML(requestOptions);
