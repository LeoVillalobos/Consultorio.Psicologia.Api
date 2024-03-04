import { IAlert } from "../types/alert";
import type {AlertStatecontext} from '../alertStateContext';

class Silent implements IAlert {

  alert(context: AlertStatecontext){
    console.log("Silent.....", context);
  }
}

export {Silent}
