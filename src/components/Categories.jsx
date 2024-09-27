import React, { useEffect, useState } from 'react'
import { ListGroup,ListGroupItem } from 'reactstrap'
import { allCategories } from '../Utils'


export const Categories = ({selectedCategory,setSelectedCateg}) => {

    
  return (
    <div className='d-flex justify-content-center'>
        <ListGroup horizontal>
            {allCategories().map(item=>
                <ListGroupItem key={item} onClick={()=>setSelectedCateg(item)}
                    className={selectedCategory==item ? 'categ bg-warning text-light' : "categ bg-light text-warning"}
                >
                    {item}
                </ListGroupItem>
            )}

        </ListGroup>
    </div>
  )
}
