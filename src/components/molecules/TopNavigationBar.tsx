import React from 'react'
import Image from 'next/image'


const TopNavigationBar = () => {
  return (
    <div className='w-full pt-10 px-10 flex justify-center items-center'>
        <div className='flex'>
            <Image src="/main-logo-2.png" alt="Coffee Shop Image" width={200} height={100} />
        </div>
    </div>
  )
}

export default TopNavigationBar