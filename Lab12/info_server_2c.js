let express = require('express');
let app = express();

app.use(express.static(__dirname + '/public'));

// Add a route for GET requests to the path '/test'
app.get('/test', function (request, response) {
    response.send('app.get for test was excecuted');
    console.log('app.get for test was excecuted');
});

app.all('*', function (request, response, next) {
    //response.send(request.method + ' to path ' + request.path);
    console.log(request.method + ' to path ' + request.path);
});
app.listen(8080, () => console.log(`listening on port 8080`)); // anonymous function here to do a callback