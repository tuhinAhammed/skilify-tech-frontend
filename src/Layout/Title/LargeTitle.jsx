

import React from 'react'

const LargeTitle = ({className , text}) => {
  return (
    <h1 className={`text-lg sm:text-2xl md:text-4xl lg:text-5xl ${className}`}>{text}</h1>
  )
}

export default LargeTitle