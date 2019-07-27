import React, { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
  const [storeValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (e) {
      return initialValue
    }
  })
  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setValue(value)
    } catch (error) {
      console.log(error)
    }
  }
  return [storeValue, setLocalStorage]
}
