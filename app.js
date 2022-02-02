const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', (req, res) => {
    console.log("at home site");

    res.render('index', {fullName: ""});
});

app.post('/', (req, res) => {
    const fullName = req.body.firstName + ' ' + req.body.lastName;
    res.render('index', {fullName: fullName});
});

app.listen(process.env.PORT || 3000, () => {
    console.log("server running");
});



