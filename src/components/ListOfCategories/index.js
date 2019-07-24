import React, { useState, useEffect, Fragment } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData () {
      try {
        const response = await window.fetch('https://petgram-api-cristiancc.now.sh/categories')
        const dataCategories = await response.json()
        setLoading(false)
        setCategories(dataCategories)
      } catch (error) {
        console.log('se viene el error provocado por mi mismo en la API')
        console.log(error)
        setLoading(false)
      }
    }
    fetchData()
  }, [])
  return { categories, loading }
}

export const ListOfCategories = () => {
  const [isFixedNavbar, setFixedNavbar] = useState(false)
  const { categories, loading } = useCategoriesData()
  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      isFixedNavbar !== newShowFixed && setFixedNavbar(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [isFixedNavbar])

  const renderList = fixed => (
    <List fixed={fixed}>
      {
        loading
          ? <p>Cargando...</p>
          : categories.map(category => (
            <Item key={category.id}>
              <Category {...category} />
            </Item>
          ))
      }
    </List>
  )

  return (
    <Fragment>
      {renderList()}
      {isFixedNavbar && renderList(true)}
    </Fragment>
  )
}
