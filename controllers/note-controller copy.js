/*import { Database } from './db'; // Import the Database class

export class NoteController {
  constructor() {
    this.db = new Database({
      host: 'localhost',
      user: 'root',
      database: 'notes-app'
    });
  }

  async listAll(req, res) {
    try {
      console.log('noteController should list them all');
      const [results, fields] = await this.db.query('SELECT * FROM notes');
      res.send(results);
    } catch (error) {
      console.error('Error listing notes:', error);
      res.status(500).send('Internal Server Error');
    }
  }

  async create(req, res) {
    try {
      const newNote = {
        text: req.body.text
      };
      console.log('noteController create with text : ', newNote.text);
      await this.db.query('INSERT INTO notes (text) VALUE (?)', [newNote.text]);
      res.json({ message: "note added to" });
    } catch (error) {
      console.error('Error creating note:', error);
      res.status(500).send('Internal Server Error');
    }
  }

  async destroy(req, res) {
    try {
      const noteId = req.params.id;
      await this.db.query('DELETE FROM notes WHERE id = ?', [noteId]);
      res.json({ message: "note deleted" });
    } catch (error) {
      console.error('Error deleting note:', error);
      res.status(500).send('Internal Server Error');
    }
  }
}*/

