import React from 'react'
import Rightcard from './Rigthcard'

const Rightcontent = (props) => {
  return (
    <div id ='right' className='p-4 flex flex-nowrap gap-10 overflow-x-auto h-full w-2/3 '>
      {props.users.map(function(elem,idx){
        return <Rightcard key={idx} id={idx} img={elem.img} tag={elem.tag} />
      })}
    </div>
  )
}

export default Rightcontent
