import type {AlertStatecontext} from '../alertStateContext';

interface IAlert {
  alert(context: AlertStatecontext): void;
}

export {IAlert}
