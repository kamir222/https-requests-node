var https = require("https");


function getHTML (options, callback) {
  var dataChunks = [];
  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {
      dataChunks.push(data);
    });

    response.on('end', function(){
      for (var i = 0; i < dataChunks.length; i++) {
        callback(dataChunks[i]);
      }
      console.log('Response stream complete.');
    });
  });
}

var requestOptions = {
  host: process.argv[2],
  path: process.argv[3]
};

function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);
