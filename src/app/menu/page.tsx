import React from 'react'
import MenuList from '@/components/molecules/MenuList'
import { Separator } from "@/components/ui/separator"
import {dummyData} from '@/lib/dummyData'

const Menu = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
        {
            dummyData.map((categoryData, index) => (
                <React.Fragment key={index}>
                    <MenuList category={categoryData.category} products={categoryData.products} />
                    {index < dummyData.length - 1 && <Separator />}
                </React.Fragment>
            ))
        }
    </div>
  )
}

export default Menu