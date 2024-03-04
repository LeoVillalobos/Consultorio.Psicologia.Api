import { State } from "./state";

/**
 * The Context defines the interface of interest to clients. It also maintains a
 * reference to an instance of a State subclass, which represents the current
 * state of the Context.
 *
 * El Contexto define la interfaz de interés para los clientes. También mantiene un
 * referencia a una instancia de una subclase de Estado, que representa la actual
 * estado del Contexto.
*/
class Context {

  /**
     * @type {State} A reference to the current state of the Context.
     */
  private state: State;

  constructor(state: State){
    this.transitionTo(state);
  }

  public transitionTo(state: State): void {
    console.log(`Context: Transition to ${(<any>state).constructor.name}.`);
    this.state = state;
    this.state.setContext(this);
  }

  /**
   * The Context delegates part of its behavior to the current State object.
   */
  public request1(): void {
    this.state.handle1();
  }

  public request2(): void {
      this.state.handle2();
  }
}


export {Context}
