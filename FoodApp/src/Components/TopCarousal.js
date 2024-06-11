import React from 'react'
import { CDN_URL } from '../utils/const';

const TopCarousal = (props) => {
  const {image, title} = props;
  // console.log(image)
  return (
    <div className=''>
    <div className=' ml-2'>
      <img src={CDN_URL + image} alt='item logo' className='bg-fit rounded-full 
      h-28 w-40 mr-16
      sm:h-40 sm:w-52 sm:mr-24
       lg:h-48 lg:w-60 lg:mr-36'/>
    </div>
    </div>
  )
}

export default TopCarousal