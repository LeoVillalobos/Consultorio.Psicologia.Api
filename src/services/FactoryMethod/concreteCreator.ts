import { IProduct } from "./IProduct";
import { ConcreteProduct1, ConcreteProduct2 } from "./concreteProduct";
import { Creator } from "./creator";

/**
 * Concrete Creators override the factory method in order to change the
 * resulting product's type.
 *
 * Concrete Creators anula el método de fábrica para cambiar el
 * tipo de producto resultante.
 */
export class ConcreteCreator1 extends Creator {
  /**
   * Note that the signature of the method still uses the abstract product
   * type, even though the concrete product is actually returned from the
   * method. This way the Creator can stay independent of concrete product
   * classes.
   *
   * Tenga en cuenta que la firma del método todavía utiliza el producto abstracto.
   * tipo, aunque el producto concreto realmente se devuelva del
   * método. De esta manera el Creador puede permanecer independiente del producto concreto.
   * clases.
   */
  public factoryMethod(): IProduct {
      return new ConcreteProduct1();
  }
}

export class ConcreteCreator2 extends Creator {
  public factoryMethod(): IProduct {
      return new ConcreteProduct2();
  }
}

