import { PRODUCTS } from '../data/products'

export const categories = Array.from(
  PRODUCTS.map(product => product.category),
).filter((el, i, arr) => arr.indexOf(el) === i)

export const colors = Array.from(
  PRODUCTS.map(product => product.colors.map(color => color)),
)
  .reduce((prev, current) => prev.concat(current))
  .filter((el, i, arr) => arr.indexOf(el) === i)
