const express = require('express');
const cors = require('cors');
const parser = require('body-parser');

const ideas = require('./controllers/ideas');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.set('port', port);
app.set('x-powered-by', false);

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(cors());

app.use('/ideas', ideas);

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});
