import React from 'react'

const SongItem = (name,image,desc,id) => {
  return (
    <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
      <img className='rounded' src={image} alt="" />
      <p>{}</p>

    </div>
  )
}

export default SongItem