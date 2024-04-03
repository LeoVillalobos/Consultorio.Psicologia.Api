import { connection } from '../../database';


export class PersonaQueryService {
  static async getById(id: string) {
    try {
      const response = await connection.query('SELECT id, nombre FROM personas WHERE id = $1;', [id]);

      return response.rows[0];

    } catch (error) {
      console.error('Error getting person by id:', error);
      throw error;
    }
  }

  static async createPersona(username: string, password: string) {
    try {
      await connection.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }
}
