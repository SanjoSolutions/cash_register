import { sum } from './sum.js'

export class CashRegister {
  constructor(productDatabase) {
    this.productDatabase = productDatabase
    this.products = []
  }

  onScan(barcode) {
    const product = this.productDatabase.get(barcode)
    if (product) {
      this.add(product)
    }
  }

  add(product) {
    this.products.push(product)
  }

  sum() {
    return sum(this.products.map(getPrice))
  }

  reset() {
    this.products = []
  }
}

function getPrice(product) {
  return product.price
}
