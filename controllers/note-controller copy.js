/*import { Database } from './db.js'; // Import the Database class

export class NoteController {
  constructor() {
    this.db = new Database({    // Create an instance of the Database class with connection configuration
      host: 'localhost',
      user: 'root',
      database: 'notes-app'
    });
  }

  async listAll(req, res) {     // Asynchronous method to list all notes
    try {
      console.log('noteController should list them all');
      const [results, fields] = await this.db.query('SELECT * FROM notes');   // Execute a query to fetch all notes
      res.send(results); // Send the results as response
    } catch (error) {   // Catch any errors that appear during the process
      console.error('Error listing notes:', error);
      res.status(500).send('Internal Server Error');  // Send an internal server error response
    }
  }

  async create(req, res) {    // Asynchronous method to create a new note
    try {
      const newNote = {     // Create a new note object from request body
        text: req.body.text
      };
      console.log('noteController create with text : ', newNote.text);
      await this.db.query('INSERT INTO notes (text) VALUE (?)', [newNote.text]);  // Execute a query to insert the new note
      res.json({ message: "note added to" });    // Send a JSON response confirming note creation
    } catch (error) {
      console.error('Error creating note:', error);
      res.status(500).send('Internal Server Error');
    }
  }

  async destroy(req, res) {      // Asynchronous method to delete a note
    try {
      const noteId = req.params.id;  // Extract the note ID from request parameters
      await this.db.query('DELETE FROM notes WHERE id = ?', [noteId]);  // Execute a query to delete the note with given ID
      res.json({ message: "note deleted" });
    } catch (error) {
      console.error('Error deleting note:', error);
      res.status(500).send('Internal Server Error');
    }
  }
}*/











































/*import mysql from 'mysql2/promise';


const mysql = require('mysql');

// Define a class named Database
class Database {
    // Constructor method to initialize the database connection
  constructor(config) {
    // Create a connection to the MySQL database using the provided configuration
    this.connection = mysql.createConnection(config);
  }}

export class NoteController {
  async listAll(req, res) {
    console.log('noteController should list them all');
    const dbConnection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'notes-app'
    });
    console.log('connexion db réussie');
    // res.send('connexion db réussie');
    const [results, fields] = await dbConnection.query('SELECT * FROM notes');
    res.send(results);
  }

  async create(req, res) {
    const dbConnection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'notes-app'
    });

    const newNote = {
      text: req.body.text
    };

    console.log('noteController create with text : ', newNote.text);
    const [results, fields] = await dbConnection.query('INSERT INTO notes (text) VALUE (?)', [newNote.text]);

    res.json({message: "note added to"});
  }

  async destroy(req, res) {
    const dbConnection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'notes-app'
    });
    const [results, fields] = await dbConnection.query('DELETE FROM notes WHERE id = ?', [req.params.id]);
    // const arr = await dbConnection.query('DELETE FROM notes WHERE id = ?', [req.params.id]);
    // const results = arr[0];
    // const fields = arr[1];

    res.json({message: "note deleted",  results: results});
    // res.json({message: "note deleted",  results});
  }
}*/
