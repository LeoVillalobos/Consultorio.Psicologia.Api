import { connection } from '../../database';


export class UserQueryService {
  static async getUserByUsername(username: string) {
    try {
      const rows = await connection.query('SELECT * FROM users WHERE username = ?', [username]);
      return rows[0];
    } catch (error) {
      console.error('Error getting user by username:', error);
      throw error;
    }
  }

  static async createUser(username: string, password: string) {
    try {
      await connection.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  // static async delete ({ id }) {
  //   // ejercio fácil: crear el delete
  // }

  // static async update ({ id, input }) {
  //   // ejercicio fácil: crear el update
  // }
}
