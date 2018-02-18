var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
    articleOne:{
    articleName: 'Article One',
    heading: 'Article One | Nishant Singh',
    date:  '17 February 2017', 
    content : `
    <link href= '/ui/style.css' rel = 'stylesheet'>
    <p>
                This is an article and I have written it myself.
                Rate it!!
            </p>
              <p>
                This is an article and I have written it myself.
                Rate it!!
            </p>
              <p>
                This is an article and I have written it myself.
                Rate it!!
            </p>
              <p>
                This is an article and I have written it myself.
                Rate it!!
            </p>
    `
},
    articleTwo: {articleName: 'Article Two',
    heading: 'Article Two | Nishant Singh',
    date:  '17 February 2017', 
    content : `
    <link href= '/ui/style.css' rel = 'stylesheet'>
    <p>
                This is an article and I have written it myself.
                Rate it!!
            </p>
              <p>
                This is an article and I have written it myself.
                Rate it!!
            </p>
              <p>
                This is an article and I have written it myself.
                Rate it!!
            </p>
              <p>
                This is an article and I have written it myself.
                Rate it!!
            </p>
    `},
    articleThree :{
    articleName: 'Article Three',
    heading: 'Article Three | Nishant Singh',
    date:  '17 February 2017', 
    content : `
    <link href= '/ui/style.css' rel = 'stylesheet'>
    <p>
                This is an article and I have written it myself.
                Rate it!!
            </p>
              <p>
                This is an article and I have written it myself.
                Rate it!!
            </p>
              <p>
                This is an article and I have written it myself.
                Rate it!!
            </p>
              <p>
                This is an article and I have written it myself.
                Rate it!!
            </p>
    `}
};

function createTemplate(data) {
var heading = data.heading;
var articleName = data.articleName;
var date = data.date;
var content = data.content;
var htmlTemplate = `
<html>
<head>
<title>
    ${heading}
</title>
</head>
<body>
    <div class='container'>
        <a href='/'>Home</a>
        <hr/>
        <h1>${articleName}</h1>
        <p>Date: ${date}</p>
      ${content}
    </div>
</body>
</html>

`;
    return htmlTemplate;
}

app.get('/:articleName', function(req, res){
    var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName])); 
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
