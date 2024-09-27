import React from 'react'
import { data } from '../data'
import { useState,useEffect } from 'react'
import { wrap } from 'framer-motion'


export const Menu = ({selectedCategory}) => {
    const [menu,setMenu] = useState(null)
    useEffect(()=>{
        setMenu(selectedCategory=='all' ? data : data.filter(obj=>obj.category==selectedCategory))
    },[selectedCategory])

    menu && console.log(menu);

    
  return (
    <div className='row d-flex justify-content-center'>
            {menu && menu.map(obj=>
                <div className="col-md-5 m-2">
                    <div key={obj.id} className='row card'>
                        <div className='col' style={{backgroundColor: 'rgb(255, 220, 100)'}}>
                            <h5 className='text-center'>{obj.title}</h5>
                            <img className="kep img-thumbnail img-fluid" src={'images/'+obj.img} alt={obj.title} />
                            <h6>Description: {obj.desc}</h6>
                            <h6>Price: {obj.price}</h6>
                        </div>
                    </div>
                </div>
            )}
    </div>
  )
}
