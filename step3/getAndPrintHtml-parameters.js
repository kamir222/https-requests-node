var https = require("https");
// var requestOptions = {
//   host: 'sytantris.github.io',
//   path: '/http-examples/step2.html'
// };

var requestOptions = {
  host: process.argv[2],
  path: process.argv[3]
};


function getAndPrintHTML (options) {
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
      for (var i = 0; i < dataChunks.length; i++) {
        console.log(dataChunks[i]);
      }
      console.log('Response stream complete.');
    });
});

}

getAndPrintHTML(requestOptions);
