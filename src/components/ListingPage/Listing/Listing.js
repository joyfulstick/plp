import React from 'react'
import { connect } from 'react-redux'
import { PRODUCTS } from '../../../data/products'
import { CATEGORIES, COLORS } from '../../../data/definitions'
import './Listing.css'

const Listing = props => {
  const { selectedItems, value } = props,
    select = (s => selectedItems.includes(s)),
    selectColors = COLORS.filter(select).length !== 0

  const categies = CATEGORIES.filter(select).length !== 0
    ? CATEGORIES.filter(select)
    : CATEGORIES
  const colors = selectColors
    ? COLORS.filter(select)
    : COLORS

  const productsToDisplay = PRODUCTS
    .filter(p => categies.includes(p.category))
    .filter(p => p.colors.some(c => colors.includes(c)))

  return < section className="listing">
    {
      productsToDisplay.map(product => {
        let colorToDisplay = ''
        for (let i = colors.length, len = 0; i >= len; i--) {
          if (selectColors
            && colors.includes(value)
            && product.colors.includes(value)) {
            colorToDisplay = value
          } else if (product.colors.includes(colors[i])) {
            colorToDisplay = colors[i]
          }
        }

        return (
          <figure key={product.id} className="listing__product">
            {/* TODO: replace a div to an img after getting the image */}
            <div
              style={(() => {
                switch (product.category) {
                  case "rectangle": return {
                    width: 200,
                    height: 200,
                    background: colorToDisplay
                  }
                  case "circle": return {
                    width: 200,
                    height: 200,
                    borderRadius: 100,
                    background: colorToDisplay
                  }
                  case "triangle": return {
                    width: 0,
                    height: 0,
                    borderLeft: '100px solid transparent',
                    borderRight: '100px solid transparent',
                    borderBottom: `200px solid ${colorToDisplay}`
                  }
                  default: return {}
                }
              }
              )()
              }
            />
            <figcaption className="listing__product__name">{product.name}</figcaption>
            <figcaption>$ {product.price.toFixed(2)}</figcaption>
          </figure>)
      })
    }
  </section>
}

const mapStateToProps = state => {
  const { selectedItems, value } = state
  return {
    selectedItems,
    value
  }
}

export default connect(mapStateToProps)(Listing)