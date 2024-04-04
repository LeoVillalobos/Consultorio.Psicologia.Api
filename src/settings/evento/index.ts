import { DataTypes } from 'sequelize';
import sequelize from '../../database/sequelize';
import { type IEventoDTO, Evento } from '../../model/evento/index';

/**
 * Función para convertir de DTO a entidad
 *
 * @param dto
 * @returns
 */
const dtoToEntity = (dto: IEventoDTO): Evento => {
  const entity = new Evento();

  entity.nombreEvento = dto.nombreEvento;
  entity.descripcion = dto.descripcion;
  entity.fechaInicio = dto.fechaInicio;
  entity.fechaFin = dto.fechaFin;
  entity.lugar = dto.lugar;

  return entity;
}

/**
 * Función para convertir de entidad a DTO
 *
 * @param entity
 * @returns
 */
const entityToDto = (entity: Evento): IEventoDTO => {
  return {
    nombreEvento: entity.nombreEvento,
    descripcion: entity.descripcion,
    fechaInicio: entity.fechaInicio,
    fechaFin: entity.fechaFin,
    lugar: entity.lugar,
  };
}


Evento.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nombreEvento: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'nombre_evento',
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    fechaInicio: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'fecha_inicio',
    },
    fechaFin: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'fecha_fin',
    },
    lugar: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    createdBy: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    createdOn: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'evento',
    tableName: 'eventos', // Nombre de la tabla en la base de datos
    timestamps: false, // Desactiva las columnas createdAt y updatedAt
  }
);

export { Evento, IEventoDTO, dtoToEntity, entityToDto };
