# Painless Node.js API with SQL Database

A minimal scaffold project that shows how to painlessly build a robust API with SQL database on Node.js.

## What's included

- [node-postgres](https://node-postgres.com/) - Node.js modules for interfacing with PostgreSQL database
- [Knex.js](http://knexjs.org) - SQL query builder
- [Objection.js](https://vincit.github.io/objection.js/) - An SQL-friendly ORM built on Knex for Node.js
- [Express.js](https://expressjs.com/) - Web framework for Node.js. A myriad of HTTP utility methods for creating API easily.

## What does it do

It provides a simple idea/comment database and shows how relation can be modelled with Objection `Model` class. It also shows how to use eager loading to get related queries.

## Development

- Clone this repo: `git clone https://github.com/cedrickchee/painless-pg-node.git`
- `cd painless-pg-node`
- `npm install` to install required project dependencies.
- Modify database connection according to your machine in `knexfile.js`.
- Run it:
  - `npm start` to start the production server.
  - `npm run dev` to start the development server.
- Point your browser to `http://localhost:3000/ideas` to test if it's working.
