// Create web server to handle comments

// Load modules
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Set up body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up static files
app.use(express.static('public'));

// Set up comments
let comments = [
  { username: 'Tom', content: 'Hello, world!', time: '2019-9-1 12:00:00' },
  { username: 'Jerry', content: 'Hello, Tom!', time: '2019-9-1 12:00:01' },
  { username: 'Spike', content: 'Hello, Tom!', time: '2019-9-1 12:00:02' }
];

// Set up router
app.get('/comments', (req, res) => {
  res.send(comments);
});

app.post('/comments', (req, res) => {
  comments.push({
    username: req.body.username,
    content: req.body.content,
    time: new Date().toLocaleString()
  });
  res.send(comments);
});

// Start server
app.listen(3000, () => {
  console.log('Server is running at port 3000...');
});
