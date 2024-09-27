import React from 'react'
import { Categories } from './Categories'
import { MotionTitle } from './MotionTitle'


export const StickyHeader = ({selectedCategory,setSelectedCateg}) => {
  return (
    <div className='sticky Menu' style={{backgroundColor: "rgb(255, 200, 0)", padding: "1rem"}}>
      <MotionTitle />
      <Categories selectedCategory={selectedCategory} setSelectedCateg={setSelectedCateg}/>
    </div>
  )
}
