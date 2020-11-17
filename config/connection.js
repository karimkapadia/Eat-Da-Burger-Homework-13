// Set up MySQL connection.
const mysql = require('mysql');

class Database {
    constructor( config ) {
        this.connection = mysql.createConnection( config );
    }
    query( sql, args ) {
        return new Promise( ( resolve, reject ) => {
            this.connection.query( sql, args, ( err, rows ) => {
                if ( err ) {
                    return reject( err );
                }
                resolve( rows );
            } );
        } );
    }
    close() {
        return new Promise( ( resolve, reject ) => {
            this.connection.end( err => {
                if ( err ) {
                    return reject( err );
                }
                resolve();
            } );
        } );
    }
}

const db = new Database(
    process.env.JAWSDB_URL ? process.env.JAWSDB_URL:
{
    
  host: "localhost",
  port: 3306,
  user: "root",
  password: "abc123",
  database: "burgers_db"
});

// Make connection.


// Export connection for our ORM to use.
module.exports = db;
