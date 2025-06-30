import React from 'react'
import { useSidebar } from '@/components/ui/sidebar'
import { Menu, ShoppingCart } from 'lucide-react'
import Image from 'next/image'


const TopNavigationBar = () => {
  const {toggleSidebar} = useSidebar()
  return (
    <div className='w-full p-5 px-10 flex justify-between items-center'>
        <div className='flex'>
            <button onClick={toggleSidebar}>
                <Menu className='w-10 h-10 cursor-pointer' />
            </button>
        </div>
        <div className='flex'>
            <Image src="/main-logo-2.png" alt="Coffee Shop Image" width={200} height={100} />
        </div>
        <div className='w-[40px] h-[40px]'></div>
    </div>
  )
}

export default TopNavigationBar