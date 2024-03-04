import { IAlert } from "../types/alert";
import { Silent } from "../ConcreteState/silent";

import type {AlertStatecontext} from '../alertStateContext';

class Vibration implements IAlert {

  alert(context: AlertStatecontext): void{
    console.log("vibracion.....", context);
    console.log("vibracion.....", context);
    console.log("vibracion.....", context);

    context.setState(new Silent());
  }
}

export {Vibration}
