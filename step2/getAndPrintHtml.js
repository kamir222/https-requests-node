var https = require("https");

function getAndPrintHTML () {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
  //append each chunk of data to a variable
  //as it is received,
  //and then console.log the data
  //once all of the data has been received.
  var dataChunks = [];
  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {
      dataChunks.push(data);
    });

    response.on('end', function(){
      console.log(dataChunks);
      console.log('Response stream complete.');
    });
});

}

getAndPrintHTML();
