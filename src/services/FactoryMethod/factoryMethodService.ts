import { ConcreteCreator1, ConcreteCreator2 } from "./concreteCreator";
import { Creator } from "./creator";

/**
 * The client code works with an instance of a concrete creator, albeit through
 * its base interface. As long as the client keeps working with the creator via
 * the base interface, you can pass it any creator's subclass.
 */
const  clientCode = (creator: Creator) => {
  // ...
  console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
  console.log(creator.someOperation());
  // ...
}


/**
 * The Application picks a creator's type depending on the configuration or
 * environment.
 */

export const appCreator = (type: number): number => {

  if (type) {
    console.log('App: Launched with the ConcreteCreator1.');
    clientCode(new ConcreteCreator1());
  } else {
    console.log('App: Launched with the ConcreteCreator2.');
    clientCode(new ConcreteCreator2());
  }

  return type;
}


