import React, { useEffect, useRef, useState, Fragment } from 'react'
import { Article, ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const element = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined' 
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(()=> {
        const observer = new window.IntersectionObserver((entries) => {
          const { isIntersecting } = entries[0]
          if (isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
        observer.observe(element.current)
      })
  }, [element])
  return (
    <Article ref={element}>
      {
        isVisible && <Fragment>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button>
            <MdFavoriteBorder size='32px' /> {likes} likes!
          </Button>
        </Fragment>
      }
    </Article>
  )
}
