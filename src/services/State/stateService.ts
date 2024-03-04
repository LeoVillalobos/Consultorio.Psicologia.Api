import { ConcreteStateA } from "./ConcreteState/conscreteStateA";
import { Context } from "./context";

export const startState = () => {
  /**
 * The client code.
 */
  const context: Context = new Context(new ConcreteStateA());
  context.request1();
  context.request2();

  return 'hola'
}
