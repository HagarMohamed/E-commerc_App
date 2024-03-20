import React from 'react'
import { Link } from 'react-router-dom'

const SubTitle = ({title, btnTitle,pathText}) => {
  return (
    <div className='d-flex justify-content-between pt-4'>
    
    <div className='sub-tile'>{title}</div>
        {btnTitle? (

        <Link to={`${pathText}`} style={{textDecoration: 'none'}}>
            <button className='shopping-now'>{btnTitle}</button>
        </Link>
        ) 
        : null
        }
       
       
    </div>
  )
}

export default SubTitle
