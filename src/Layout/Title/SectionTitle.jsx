import React from 'react'

const SectionTitle = ({className , text , key}) => {
  return (
    <div className="flex items-center gap-6">
        <h1 key={key} className={`text-xs sm:text-sm md:text-base text-theme uppercase  ${className}`}>{text}</h1>
        <hr className='h-1 w-14 bg-theme'/>
    </div>
  )
}

export default SectionTitle