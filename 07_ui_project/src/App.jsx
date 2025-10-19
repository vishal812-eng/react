import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'


const App = () => {
  const users=[
    {
      img:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1976',
      intro:'',
      tag:'Satisfied'
    },
    {
      img:'https://images.unsplash.com/photo-1724627560403-a007720de591?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=627',
      intro:'',
      tag:'Underserved'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661504571994-c43e6eaacbf7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=686',
      intro:'',
      tag:'Underbanked'
    },
    {
      img:'https://images.unsplash.com/photo-1760661642486-bf574784273b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
      intro:'',
      tag:'Average'
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2/> 
    </div>
  )
}

export default App
