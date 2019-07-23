import React, { Fragment } from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyles } from './GlobalStyles'
import { PhotoCard } from './components/PhotoCard'

export const App = () => (
  <Fragment>
    <GlobalStyles />
    <ListOfCategories />
    <PhotoCard />
  </Fragment>
)
