import React from 'react'
import { CDN_URL } from '../utils/const';

const TopCarousal = (props) => {
  const {image, title} = props;
  // console.log(image)
  return (
    <div className=''>
    <div className=' ml-2'>
      <img src={CDN_URL + image} alt='item logo' className='bg-fit rounded-full h-48 w-60 mr-36'/>
    </div>
    </div>
  )
}

export default TopCarousal