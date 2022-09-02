import React from 'react'

const BtnLink = ({ href, children }) => {
  return (
    <a
      className={'text-firstColor font-semibold hover:text-altFirstColor'}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

export default BtnLink
