const express = require('express');
const app = express();
const port = 3000;

var data = require('./data/test.json');

app.set("view engine", "ejs");

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  let title = "Home";
  res.render("pages/index",{"title":title});
});

app.get('/about', (req, res) => {
  let title = "About Page";
  res.render("pages/about",{"title":title});
});

app.get('/project', (req, res) => {
  let title = "Project Page";
  res.render("pages/project",{"title":title});
});

app.get('/Contact', (req, res) => {
  let title = "Contact Page";
  res.render("pages/contact",{"title":title});
});

app.get('/javelin', (req, res) => {
  let title = "Javelin";
  res.render("pages/javelin",{"title":title});
});

//users index is our list page
app.get('/users', function(req, res) {
	var title = 'Users Page';
	res.render('users/index', {
    	title: title,
    	users: data
	});
});

//add user/view route - we are cheating by using the array index - 1
app.get('/users/view/:id', function(req, res) {
 var title = 'User Page';
 var id = req.params.id;
 res.render('users/view', {
     title: title,
     user: data[--id]
 });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(data);
});

