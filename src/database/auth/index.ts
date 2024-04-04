import { IUserDTO, IUserRequest } from '../../model/auth';
import User, { entityToDto } from '../../settings/auth/index';
import bcrypt from 'bcrypt';

export class UserQueryService {
  static async getUserByUsername(username: string): Promise<IUserDTO> {
    try {

      const response = await User.findOne({ where: { nombreUsuario: username } });

      return entityToDto(response);

    } catch (error) {
      console.error('Error getting user by username:', error);
      throw error;
    }
  }

  static async createUser(user: IUserRequest): Promise<User> {
    try {

      const hashedPassword = await bcrypt.hash(user.contrasenia, 10);

      const nuevoUsuario = await User.create({
        nombreUsuario: user.nombreUsuario,
        contrasenia: hashedPassword,
        correoElectronico: user.correoElectronico,
        fk_persona_id: user.personaId,
        createdAt: new Date(), // Puedes establecer la fecha de creación aquí si es necesario
        createdBy: 'Sistema', // Puedes establecer el creador aquí si es necesario
        createdOn: new Date(), // Puedes establecer la fecha de creación aquí si es necesario
      });

      return nuevoUsuario;

    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }
}
