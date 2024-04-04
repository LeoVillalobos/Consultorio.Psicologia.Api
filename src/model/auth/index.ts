import { Model } from 'sequelize';
import type { IAuditable, IEntity } from "../base/IEntity";

/**
 *
 * En TypeScript, puede agregar información escrita
 * sin agregar un campo de clase pública real usando
 * la declarepalabra clave: declare
 */
class User extends Model<IUserEntity> {
  declare id: string;
  declare nombreUsuario: string;
  declare contrasenia: string;
  declare correoElectronico: string;
  declare fk_persona_id: string;
}

/**
 *
 */
interface IUserEntity extends IAuditable {
  nombreUsuario: string;
  contrasenia: string;
  correoElectronico: string;
  fk_persona_id: string;
}

/**
 *
 */
interface IUserDTO extends IEntity {
  nombreUsuario: string;
  contrasenia: string;
  correoElectronico: string;
}

/**
 *
 */
interface IUserRequest extends IEntity {
  nombreUsuario: string;
  contrasenia: string;
  correoElectronico: string;
  personaId: string;
}

export { User, IUserDTO, IUserRequest }
