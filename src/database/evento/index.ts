import { Evento, type IEventoDTO, entityToDto  } from '../../settings/evento';


export class EventoQueryService {

  static async getById(id: string): Promise<IEventoDTO> {
    try {

      const response = await Evento.findByPk(id);

       // Mapear los eventos a DTOs
      return entityToDto(response);

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
