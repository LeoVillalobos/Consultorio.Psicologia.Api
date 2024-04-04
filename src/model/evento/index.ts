import IEntity from "../base/IEntity";
import { Model } from 'sequelize';


/**
 *
 * En TypeScript, puede agregar información escrita
 * sin agregar un campo de clase pública real usando
 * la declarepalabra clave: declare
 */
class Evento extends Model<IEventoEntity> {
  declare id: string;
  declare nombreEvento: string;
  declare descripcion: string;
  declare fechaInicio: Date;
  declare fechaFin: Date;
  declare lugar: string;
  declare createdAt: Date;
  declare createdBy: Date;
  declare createdOn: Date;
}

/**
 *
 */
interface IEventoEntity extends IEntity {
  nombreEvento: string;
  descripcion: string;
  fechaInicio: Date;
  fechaFin: Date;
  lugar: string;
  createdAt: Date;
  createdBy: Date;
  createdOn: Date;
}

/**
 * DTO (Data Transfer Object)
 *
 */
interface IEventoDTO {
  nombreEvento: string;
  descripcion: string;
  fechaInicio: Date;
  fechaFin: Date;
  lugar: string;
}

export { Evento, IEventoDTO, IEventoEntity };
