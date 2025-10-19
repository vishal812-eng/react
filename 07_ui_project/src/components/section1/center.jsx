import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const center = (props) => {
  return (
    <div className='py-6 flex items-center gap-20 h-[600px] px-18'>
      <Leftcontent/>
      <Rightcontent users={props.users} />
    </div>
  )
}

export default center
