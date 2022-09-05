import React from 'react'

const Button = ({ label, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      className={
        'max-w-fit p-4 rounded-sm bg-firstColor text-btnTxtColor font-size font-semibold hover:bg-altFirstColor'
      }
    >
      {label}
    </a>
  )
}

export default Button
