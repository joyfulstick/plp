import { PRODUCTS } from '../data/products'

export const CATEGORIES = Array.from(
  PRODUCTS.map(product => product.category),
).filter((el, i, arr) => arr.indexOf(el) === i)

export const COLORS = Array.from(
  PRODUCTS.map(product => product.colors.map(color => color)),
)
  .reduce((prev, current) => prev.concat(current))
  .filter((el, i, arr) => arr.indexOf(el) === i)
