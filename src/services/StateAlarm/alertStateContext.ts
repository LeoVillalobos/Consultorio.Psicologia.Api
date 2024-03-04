import type {IAlert} from '../StateAlarm/types/alert';
import { Vibration } from './ConcreteState/vibration';

/**
 * clase que representa el contexto
 */
class AlertStatecontext {

  /**
   * ATRIBUTO QUE REPRESENTA EL ESTADO
   */
  private currentState: IAlert;

  /**
   * CONSTRUCTOR QUE INICIALIZA EL ESTADO DEL CONTEXTO
   */
  constructor(){
    this.currentState = new Vibration();
  }

  /**
   * CAMBIA EL ATRIBUTO DEL ESTADO SEGUN EL ESTADO
   * PASADO POR EL PARAMETRO
   * @param state
   */
  public setState(state: IAlert): void {
    this.currentState = state;
  }

  /**
   * Delega la accion de alerta
   * al objeto que guarda
   * en su atributo de estado
   */
  public alert(): void{
    this.currentState.alert(this);
  }
}


export {AlertStatecontext}
