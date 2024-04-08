import React from 'react'
import clsx from 'clsx'
const Button = ({children, handleClick, className}) => {
  return (
    <button className={clsx('px-2 py-1 bg-green-200 rounded  w-20 ', className)} onClick={handleClick}>
        {children}
    </button>
  )
}

export default Button