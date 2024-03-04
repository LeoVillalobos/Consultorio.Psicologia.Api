// import { Silent } from "./ConcreteState/silent";
import { AlertStatecontext } from "./alertStateContext"


export const startState = () => {
  const stateContext: AlertStatecontext = new AlertStatecontext();

  stateContext.alert();
  stateContext.alert();
  // stateContext.setState(new Silent());
  // stateContext.alert();
  // stateContext.alert();
  return "bere-chan";
}
