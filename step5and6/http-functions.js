var https = require("https"); //require https module

function getHTML (options, callback) { //function that takes options and callback function as paras
  var dataChunks = []; //empty array
  https.get(options, function (response) { //get request function and invoke function with response arg
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

};


module.exports = getHTML;
