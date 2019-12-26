var express = require('express');

var app = express();

app.use('/', express.static('./src/public'))
app.use('/assets', express.static('./src/assets'))

app.listen(3000, () => {console.log('App listening')});