require('dotenv').config();
const { Client, Pool } = require('pg');

const pgConfig = {
    user: 'dev01',
    host: 'localhost',
    database: 'temp_api',
    password: 'password123',
    port: 5432
};

/*

PGUSER=dev01 \
PGHOST=localhost \
PGPASSWORD=superd3vSECRET \
PGDATABASE=temp_api \
PGPORT=5432 \
node app.js

*/

//
// Configure a client
//
// const client = new Client(pgConfig);

// client.connect().then(() => {
//     console.log('DB connected!');
// }).catch((e) => {
//     console.log(e);
// });

// client.query('SELECT NOW()', (err, res) => {
//     if (err) return console.log(err);

//     console.log('Query result:', res);
//     client.end();
// });

//
// Or configure a Pool
//
// const pool = new Pool(pgConfig);

// pool.query('SELECT NOW()', (err, res) => {
//     if (err) return console.log(err);

//     console.log('Query result:', res);
//     pool.end();
// });

//
// Connection to Unix sockets (on distros like Ubuntu)
//
// const client = new Client({
//     host: '/var/run/postgresql',
//     user: 'cedric',
//     database: pgConfig.database,
// });

// client.connect().then(() => {
//     console.log('DB connected!');
// }).catch((e) => {
//     console.log(e);
// });

// client.query('SELECT 1', (err, res) => {
//     if (err) return console.log(err);

//     console.log('Query result:', res);
//     client.end();
// });

//
// Initialize a pool with a connection string URI
//
// const connectionString = `postgresql://${pgConfig.user}:${pgConfig.password}@${pgConfig.host}:${pgConfig.port}/${pgConfig.database}`;
const connectionString = process.env.DATABASE_URL;
console.log('connectionString:', connectionString);
const pool = new Pool({
    connectionString: connectionString,
})
pool.query('SELECT NOW()', (err, res) => {
    if (err) return console.log(err);

    console.log('Query result:', res);
    pool.end();
});