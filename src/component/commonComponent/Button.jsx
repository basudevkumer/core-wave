import React from 'react'

const Button = ({children}) => {
  return (
    <button className='text-white  rounded-lg font-semibold font-lato text-base py-[14px] px-[25px] bg-primary'>{children}</button>
  )
}

export default Button