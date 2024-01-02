import React from 'react'
import FileLoader from '../../assets/images/fileLoader.svg'
const ImageLoading = () => {
  return (
    <div className='flex justify-center flex-col items-center'>
      <img src={FileLoader} alt="" className='h-[3rem] w-[3rem]' />
      <p>uploading..</p>
    </div>
  )
}

export default ImageLoading
