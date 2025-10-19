import React from 'react'
import Rightcardcontent from './Rightcardcontent'

const Rigthcard = (props) => {
  return (
    <div  className='h-full shrink-0 overflow-hidden relative w-80 rounded-4xl'>
      <img className='h-full w-full obj'  src={props.img} alt="" />
      <Rightcardcontent id={props.id} tag={props.tag}/>  
    </div>
  )
}

export default Rigthcard
