import React from 'react'

const SubTitle = ({title, btnTitle}) => {
  return (
    <div className='d-flex justify-content-between pt-4'>
        {btnTitle? (<button className='shopping-now'>{btnTitle}</button>) 
        : null

        }
        <div className='sub-tile'>{title}</div>
       
    </div>
  )
}

export default SubTitle
