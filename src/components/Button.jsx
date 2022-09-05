import React from 'react'

const Button = ({ label, href }) => {
  return (
    <a href={href} target="_blank" className={'primaryBtn p-4'}>
      {label}
    </a>
  )
}

export default Button
