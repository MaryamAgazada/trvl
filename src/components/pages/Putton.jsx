import React from 'react'
import "./Putton.css"
const Putton = (props) => {
  return (
    <div>
      <button onClick={()=>props.onClick(props.genre)} className='btn'>{props.children}</button>
    </div>
  )
}

export default Putton
