import React from 'react'

const ExtraMidTitle = ({className , text , ...rest}) => {
  return (
    <h1 {...rest} className={`capitalize text-sm sm:text-base md:text-lg ${className}`}>{text}</h1>
  )
}

export default ExtraMidTitle