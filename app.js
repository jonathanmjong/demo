const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// .ejs pages need to be stored in "views" folder
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', (req, res) => {
    console.log("GET /");

    res.render('index', {fullName: "test name"});
});

app.post('/', (req, res) => {
    console.log('POST /')
    const fullName = req.body.firstName + ' ' + req.body.lastName;
    res.render('index', {fullName: fullName});
});

app.listen(process.env.PORT || 3000, () => {
    console.log("server running");
});



