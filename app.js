const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));



app.get('/', (req, res) => {
    res.sendFile('index.html', () => {
        console.log('user on home page');
    });
});

app.post('/', (req, res) => {
    console.log(req.body.firstName, req.body.lastName, req.body.email);
    res.redirect('index.html');
})

app.listen(process.env.PORT || 3000, () => {
    console.log("server running");
});



