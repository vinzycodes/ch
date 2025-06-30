"use client"

import React, { useState } from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { Button } from '../ui/button'
import { ItemType } from '@/lib/types'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ModificationType } from '@/lib/types'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from '@radix-ui/react-separator'
import { useAtom } from 'jotai'
import { addToCart } from '@/store'
import { toast } from 'sonner';


const MenuItem = ({ name, details, price, modifications }: ItemType) => {
  const [order, setOrder] = useState<ItemType>({
    name: name,
    price: price,
    modifications: modifications || []
  })
  const [, addToCartAtom] = useAtom(addToCart)
  const [totalPrice, setTotalPrice] = useState(price) // Add totalPrice state
  const [selectedOptions, setSelectedOptions] = useState(
    () =>
      (modifications || []).reduce((acc, mod) => {
        acc[mod.type] = mod.options[0]?.name;
        return acc;
      }, {} as Record<string, string>)
  );
  const [open, setOpen] = useState(false); // Add dialog open state

  // Helper to recalculate total price based on base price and selected modification prices
  const recalculateTotalPrice = (basePrice: number, mods: ModificationType[]) => {
    const modsTotal = mods.reduce((sum, mod) => sum + (mod.price || 0), 0)
    return basePrice + modsTotal
  }

  // Helper to sync modifications with selectedOptions
  function getSyncedModifications(modifications: ModificationType[], selectedOptions: Record<string, string>) {
    return modifications.map(mod => {
      const selectedName = selectedOptions[mod.type] || mod.options[0]?.name;
      const selected = mod.options.find(opt => opt.name === selectedName);
      return {
        ...mod,
        selectedOption: selectedName,
        price: selected?.price || 0
      }
    });
  }

  return (
        <Card className='flex flex-col justify-between gap-4 bg-[rgba(255,255,255,.3)] hover:bg-white hover:shadow-xl transition-all duration-400'>
            <div>
              <div className='w-[100%] px-5 mb-4 flex items-center justify-center '>
                  <Image
                      src="/coffee.jpg"
                      alt="Coffee Image"
                      width={300}
                      height={300}
                      className="object-cover bg-gray-100 rounded-lg" />
              </div>
              <CardHeader className='flex flex-col md:flex-row px-5 justify-between items-start md:items-center'>
                  <CardTitle className='mx-1'>{name}</CardTitle>
                  <CardAction className=''>
                      {price?.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}
                  </CardAction>
              </CardHeader>
              <CardContent className='my-2'>
                <CardDescription className='hidden md:block'>
                      {details}
                </CardDescription>
              </CardContent>
            </div>
            <CardFooter>
                 <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger
                    className='cursor-pointer font-semibold rounded-md border py-3 w-[100%] bg-[#2D1E14] hover:bg-[#422922] text-white transition-all'
                    onClick={() => setOpen(true)}
                  >
                    View / Add
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className='mb-2 border-b-1 border-gray-200 pb-3 px-1'>{name}</DialogTitle>
                      <Separator />
                      <DialogDescription>
                          <div>
                            {modifications && modifications.length > 0 ? (
                              <div>
                                  {modifications.map((modification: ModificationType, index: number) => (
                                    <div key={index} className='border-b-1 border-gray-200 mb-3'>
                                      <Label className='text-lg mb-1 text-gray-800 font-bold'>
                                        {modification.type}
                                      </Label>
                                      <RadioGroup
                                        value={selectedOptions[modification.type]}
                                        onValueChange={value => {
                                          setSelectedOptions(prev => ({
                                            ...prev,
                                            [modification.type]: value
                                          }));
                                          // Update modifications and price
                                          const updatedMods = (order.modifications ?? []).map(mod => {
                                            if (mod.type === modification.type) {
                                              const selected = modification.options.find(opt => opt.name === value);
                                              return {
                                                ...mod,
                                                selectedOption: value,
                                                price: selected?.price || 0
                                              }
                                            }
                                            return mod
                                          });
                                          setOrder({
                                            ...order,
                                            modifications: updatedMods
                                          });
                                          setTotalPrice(recalculateTotalPrice(price, updatedMods));
                                        }}
                                        className='flex flex-col space-y-2'
                                      >
                                        {modification.options.map((option, optionIndex) => (
                                          <div className="flex items-center space-x-2" key={optionIndex}>
                                            <Label htmlFor={`${modification.type}-${option.name}`}>{option.name}</Label>
                                            <RadioGroupItem
                                              value={option.name}
                                              id={`${modification.type}-${option.name}`}
                                              className=''
                                            />
                                            <span className='ml-2'>
                                              {option.price == 0 ? "" : option.price.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}
                                            </span>
                                          </div>
                                        ))}
                                      </RadioGroup>
                                      <br className='border-2 border-gray-200'/>
                                      
                                    </div>
                                  ))}
                                  <div className='flex justify-between'>
                                    <span className='font-bold text-black text-2xl'>
                                      {totalPrice.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}
                                    </span>
                                    <Button 
                                      className='font-semibold bg-[#2D1E14] hover:bg-[#422922] text-white transition-all'
                                      onClick={() => {
                                        const syncedMods = getSyncedModifications(modifications, selectedOptions);
                                        addToCartAtom({ ...order, modifications: syncedMods, price: recalculateTotalPrice(price, syncedMods), id: crypto.randomUUID() });
                                        setOpen(false); // Close the dialog after adding to cart
                                        toast.success(`${name} has been added to your cart!`, {
                                          duration: 3000,
                                          position: 'top-right',
                                          style: {
                                            background: '#fff',
                                            color: '#000',
                                            borderRadius: '8px',
                                            padding: '16px',
                                          },
                                        });
                                      }}
                                    >Add to cart</Button>
                                  </div>
                                  
                              </div>
                            ) : (
                              <div>No modifications available.</div>
                            )
                            }
                          </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
            </CardFooter>
        </Card>
  )
}

export default MenuItem