import React, { useState, useEffect, Fragment } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  const [isFixedNavbar, setFixedNavbar] = useState(false)

  useEffect(() => {
    async function fetchData () {
      const response = await window.fetch(
        'https://petgram-api-cristiancc.now.sh/categories'
      )
      const dataCategories = await response.json()
      setCategories(dataCategories)
    }
    fetchData()
  }, [])

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      isFixedNavbar !== newShowFixed && setFixedNavbar(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
  })

  const renderList = fixed => (
    <List className={fixed ? 'fixed' : ''}>
      {categories.map(category => (
        <Item key={category}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  )

  return (
    <Fragment>
      {renderList()}
      {isFixedNavbar && renderList(true)}
    </Fragment>
  )
}
