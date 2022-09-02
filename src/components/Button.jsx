import React from 'react'

const Button = () => {
  const [count, setCount] = React.useState(0)

  function handleClick() {
    setCount((count) => count + 1)
  }

  return (
    <button
      className={
        'p-1 rounded-md bg-firstColor text-btnTxtColor font-semibold mt-6 mb-6 hover:bg-altFirstColor'
      }
      onClick={handleClick}
    >
      count is: {count}
    </button>
  )
}

export default Button
