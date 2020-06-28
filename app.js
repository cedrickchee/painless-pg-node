const express = require('express');
const cors = require('cors');
const parser = require('body-parser');
const morgan = require('morgan');

const ideas = require('./controllers/ideas');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.set('port', port);
app.set('x-powered-by', false);
app.use(morgan('tiny'));

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(cors());

app.use('/api/v1/ideas', ideas);

app.listen(port, () => {
    const development = process.env.NODE_ENV !== 'production';

    console.debug('NODE_ENV:', process.env.NODE_ENV);
    console.debug('development:', development);

    console.log(`${app.get('env')} server is up and running on port ${port}`);
});
