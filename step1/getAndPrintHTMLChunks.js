var https = require('https');

function getAndPrintHTMLChunks () {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response) {
    response.on('data', function (data) {
      console.log('Chunk Recieved. Length:' + data.length + '\n');
    });


  });

}

getAndPrintHTMLChunks();
