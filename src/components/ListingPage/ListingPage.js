import React from 'react'
import Listing from './Listing/Listing'
import Filters from './Filters/Filters'

const ListingPage = props => (
  <article>
    <Filters />
    <Listing />
  </article>
)

export default ListingPage