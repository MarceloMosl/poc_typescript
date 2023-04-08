import pg from 'pg';
var Pool = pg.Pool;
export var db = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "19032003Mosl",
    database: "typescript",
});
