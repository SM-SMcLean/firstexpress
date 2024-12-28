const express = require('express'); const morgan = require('morgan'); const PORT = 3000;

var app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.status(200);
    //res.sendFile(__dirname + '/html/welcome.html');
    res.render('mytemplate');
});

app.get('*', (req, res) => {
    res.status(404);
    res.send('<h1>404 Not Found</h1>');
});

app.listen(PORT, (err) => {
    if (err)
        return console.log(err);
    console.log(`Express Web Server listening on http://localhost:${PORT}`);
});