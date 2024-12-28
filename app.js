const express = require('express'); const morgan = require('morgan'); const PORT = 3000;
var app = express();
app.use(morgan('tiny'));
app.get('/', (req, res) => {
    res.status(200);
    res.send('<h1>Hello Express Web App!</h1>');
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