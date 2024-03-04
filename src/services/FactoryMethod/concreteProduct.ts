import { IProduct } from "./IProduct";

/**
 * Concrete Products provide various implementations of the Product interface.
 */
class ConcreteProduct1 implements IProduct {
  public operation(): string {
      return '{Result of the ConcreteProduct1}';
  }
}

class ConcreteProduct2 implements IProduct {
  public operation(): string {
      return '{Result of the ConcreteProduct2}';
  }
}

export { ConcreteProduct1, ConcreteProduct2 }
