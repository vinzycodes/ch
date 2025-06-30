import React from 'react'
import MenuItem from '@/components/atoms/MenuItem'
import { ItemType, MenuItemType } from '@/lib/types'

const MenuList = ({ category, products }: MenuItemType ) => {
  return (
    <div className='my-10 relative'>
        <div className='xl:w-[200px] xl:h-[10px] text-nowrap xl:absolute xl:left-[-150px] xl:top-0 xl:-rotate-90'>
          <div className='xl:relative'>
            <h1 className='static xl:absolute xl:right-[100px] z-50 mb-6 ml-2 text-5xl font-light tracking-widest'>{category}</h1>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 [&>*]:h-[280px] md:[&>*]:h-[400px]">
            {products.map((item: ItemType, index: React.Key | null | undefined) => (
                <MenuItem key={index} name={item.name} details={item.details} price={item.price} modifications={item.modifications} />
            ))}
        </div>
    </div>
  )
}

export default MenuList