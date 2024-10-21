import React from 'react'

const Button = (props) => {
  return (
    <>
    <button onClick={props.userCall} className={`bg-yellow-400 text-black font-bold ${props.ts} ${props.w} ${props.h} rounded-lg ${props.m} hover:bg-black hover:text-yellow-400 hover:border-2 border-yellow-400`}>{props.text}</button>
    </>
  )
}

export default Button