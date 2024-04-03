import Evento from '../../model/evento/index';


export class EventoQueryService {

  static async getById(id: string): Promise<Evento> {
    try {

      const response = await Evento.findByPk(id, {
        attributes: ['id', 'nombreEvento'],
      });

      return response;

    } catch (error) {
      console.error('Error getting person by id:', error);
      throw error;
    }
  }

  static async createPersona(_username: string, _password: string) {
    try {
      // await connection.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }
}
