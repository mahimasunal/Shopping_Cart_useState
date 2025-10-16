import React from 'react'
import Button from './Button'

export default function Header() {
  return (
    <div className='header'>
        <h2 className="cartName">Context Cart</h2>
        <Button className = 'cart'>Cart</Button>      
    </div>
  )
}
