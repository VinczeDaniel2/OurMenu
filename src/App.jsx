import { useState } from 'react';
import './App.css'
import { Menu } from './components/Menu'
import { StickyHeader } from './components/StickyHeader'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [selectedCategory,setSelectedCateg]=useState('all')

  return (
    <div className='container' style={{overflowX: "hidden"}}>
      <div className='row'>
        <StickyHeader selectedCategory={selectedCategory} setSelectedCateg={setSelectedCateg}/>
      </div>
      <div>
          <Menu selectedCategory={selectedCategory}/>
      </div>
            
    </div>
  )
}

export default App
