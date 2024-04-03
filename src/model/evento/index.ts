import { DataTypes, Model } from 'sequelize';
import sequelize from '../../database/sequelize';

interface IEventoAttributes {
  id: string;
  nombreEvento: string;
  descripcion: string;
  fechaInicio: Date;
  fechaFin: Date;
  lugar: string;
}

class Evento extends Model<IEventoAttributes> {}

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
  },
  {
    sequelize,
    modelName: 'Evento',
    tableName: 'eventos', // Nombre de la tabla en la base de datos
    timestamps: false, // Desactiva las columnas createdAt y updatedAt
  }
);

export default Evento;
