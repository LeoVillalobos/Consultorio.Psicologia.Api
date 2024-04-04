import { DataTypes } from 'sequelize';
import sequelize from '../../database/sequelize';
import { User, IUserDTO } from '../../model/auth';

/**
 * Función para convertir de DTO a entidad
 *
 * @param dto
 * @returns
 */
export const dtoToEntity = (dto: IUserDTO): User => {
  const entity = new User();

  entity.nombreUsuario = dto.nombreUsuario;
  entity.contrasenia = dto.contrasenia;
  entity.correoElectronico = dto.correoElectronico;

  return entity;
}

/**
 * Función para convertir de entidad a DTO
 *
 * @param entity
 * @returns
 */
export const entityToDto = (entity: User): IUserDTO  => {
  return {
    nombreUsuario: entity.nombreUsuario,
    contrasenia: entity.contrasenia,
    correoElectronico: entity.correoElectronico
  };
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nombreUsuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contrasenia: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    correoElectronico: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fk_persona_id: {
      type: DataTypes.UUID, // Suponiendo que fk_persona_id es un UUID
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    createdBy: {
      type: DataTypes.STRING, // Suponiendo que createdBy es una cadena
      allowNull: false,
    },
    createdOn: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User', // Nombre del modelo en singular
    tableName: 'usuarios', // Nombre de la tabla en plural en la base de datos
    timestamps: false, // Desactiva las columnas createdAt y updatedAt
  }
);

export default User;
