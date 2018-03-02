import React from 'react'
import { connect } from 'react-redux'
import { PRODUCTS } from '../../../data/products'
import { colors } from '../../../data/definitions'
import './Listing.css'

const Listing = props => {
  const filtered = PRODUCTS
    .filter(product => props.selectedItems.indexOf(product.category) > -1)
  const productsToDisplay = filtered.length === 0 ? PRODUCTS : filtered

  const color = colors.filter(c => props.selectedItems.indexOf(c) > -1)
  const colorToDisplay = color.length === 0 ? colors[0] : color[0]

  return < section className="listing">
    {
      productsToDisplay.map(product => (
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
        </figure>
      ))
    }
  </section>
}

const mapStateToProps = state => {
  const { selectedItems } = state
  return {
    selectedItems
  }
}

export default connect(mapStateToProps)(Listing)