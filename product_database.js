export class ProductDatabase {
  constructor() {
    this.products = new Map()
  }

  add(product) {
    this.products.set(product.id, product)
    return this
  }

  get(id) {
    return this.products.get(id)
  }
}
