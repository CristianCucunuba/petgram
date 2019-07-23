import React, { Fragment } from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyles } from './GlobalStyles'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'

export const App = () => (
  <Fragment>
    <GlobalStyles />
    <ListOfCategories />
    <ListOfPhotoCards />
  </Fragment>
)
