import mysql from 'mysql2/promise';

// Define a class named Database
export class Database {
    // Constructor method to initialize the database connection
  constructor(config) {
    // Create a connection to the MySQL database using the provided configuration
    this.connection = mysql.createConnection(config);
  }}

  
  
  
  
  
  // Method to execute SQL queries asynchronously and return a promise with the results
 /* async query(sql, params) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, params, (error, results, fields) => {
        if (error) {
          reject(error);
          return;
        }
        resolve([results, fields]);
      });
    });
  }

  async close() {
    return new Promise((resolve, reject) => {
      this.connection.end(error => {
        if (error) {
          reject(error);
          return;
        }
        resolve();
      });
    });
  }
}

module.exports = Database;*/
