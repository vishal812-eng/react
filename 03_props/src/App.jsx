import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
      
      <Card user='Alia Bhatt' img='https://1.bp.blogspot.com/-i_YfHM0HSj8/XcRCurHzs_I/AAAAAAAABBo/iXNu40jPU4glUV2OMFAttXRwK0HRASdywCNcBGAsYHQ/s1600/alia-bhatt-cute-dp.jpg'/>
      <Card user='Vishal' img='https://images.unsplash.com/photo-1756916475010-64d80096a394?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687'/>
      <Card user='jacklin fernandes' img='https://wallpaper-house.com/data/out/7/wallpaper2you_197856.jpg'/>
    </div>
  )
}

export default App