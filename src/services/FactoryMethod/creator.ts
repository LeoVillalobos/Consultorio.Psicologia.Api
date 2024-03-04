import { IProduct } from "./IProduct";

/**
 * The Creator class declares the factory method that is supposed to return an
 * object of a Product class. The Creator's subclasses usually provide the
 * implementation of this method.
 * ---
  * La clase Creator declara el método de fábrica que se supone que devuelve un
  * objeto de una clase de Producto. Las subclases del Creador normalmente proporcionan la
  * implementación de este método.
 */
export abstract class Creator {
  /**
   * Note that the Creator may also provide some default implementation of the
   * factory method.
   * Tenga en cuenta que el Creador también puede proporcionar alguna implementación predeterminada del
   * método de fábrica.
   */
  public abstract factoryMethod(): IProduct;

    /**
   * Also note that, despite its name, the Creator's primary responsibility is
   * not creating products. Usually, it contains some core business logic that
   * relies on Product objects, returned by the factory method. Subclasses can
   * indirectly change that business logic by overriding the factory method
   * and returning a different type of product from it.
   *
   * También tenga en cuenta que, a pesar de su nombre, la responsabilidad principal del Creador es
   * no crear productos. Por lo general, contiene alguna lógica empresarial central que
   * se basa en objetos Producto, devueltos por el método de fábrica. Las subclases pueden
   * cambiar indirectamente esa lógica empresarial anulando el método de fábrica
   * y devolver un tipo de producto diferente al mismo.
   */
  public someOperation(): string {
    // Call the factory method to create a Product object.
    const product = this.factoryMethod();
    // Now, use the product.
    return `Creator: The same creator's code has just worked with ${product.operation()}`;
  }
};
