import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetFooter
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cart, removeFromCart } from "@/store"
import { useAtom, useSetAtom } from "jotai"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Printer, Trash2 } from "lucide-react"
import { usePrint } from "@/hooks/usePrint"
import { OrderType } from "@/lib/types"

export function SidebarRight() {
  const [cartItems] = useAtom(cart)
  const removeFromCartFn = useSetAtom(removeFromCart)
  
  const HandlePrint = () => {
    usePrint(cartItems as OrderType[])
  }
  
  return (
              <SheetContent className="overflow-auto">
                <SheetHeader className="mt-10">
                  <SheetTitle className="text-2xl font-benguiat">
                    Cart
                  </SheetTitle>
                  <Separator />
                  <SheetDescription>
                    <div>
                      {cartItems.length === 0 ? (
                        <div className="text-center text-gray-500">
                          Your cart is empty.
                        </div>
                      ) : (
                        cartItems.map((item, index) => (
                          <div key={index} className="flex my-3 flex-col justify-start items-start mb-2">
                            <div className="flex flex-row justify-between w-full">
                              <div>
                                <span className="font-semibold text-lg">{item.name}</span>
                                <span> - {item.price.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}</span>
                              </div>
                              <div>
                                <Button variant="outline" className="ml-2 hover:bg-[initial] border-0 shadow-none" onClick={() => removeFromCartFn(item)}>
                                  <Trash2 />
                                </Button>
                              </div>
                            </div>
                            {item.modifications?.map((modification, modIndex) => (
                              <span key={modIndex} className="text-sm text-gray-500">
                                {modification.type}: {modification.selectedOption}
                              </span>
                            ))}
                          </div>
                        ))
                      )}
                    </div>
                      

                  </SheetDescription>
                  </SheetHeader>
                  <SheetFooter className="flex flex-row items-center justify-between">
                    <span className="text-2xl font-bold">Total: {cartItems.reduce((total, item) => total + item.price, 0).toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}</span>
                    <Dialog>
                      <DialogTrigger asChild disabled={cartItems.length === 0}>
                        <Button className="h-[50px] font-bold" variant={"default"}>I&apos;m good</Button>
                      </DialogTrigger>
                      <DialogContent className="bg-white">
                          <div>
                            <Carousel>
                              <CarouselContent>
                                <CarouselItem>
                                  <h1 className="text-3xl font-semibold">Step 1</h1>
                                  <Separator className="my-3"/>
                                  <div className="flex justify-between items-center">
                                    Check your goods, then print your receipt!
                                    <Button className="border-1 shadow-md mx-3" onClick={HandlePrint} variant={"default"}>
                                      Print <Printer />
                                    </Button>
                                  </div>
                                  <div className="max-h-[500px] mt-2 overflow-y-auto">
                                    {
                                      cartItems.map((item, index) => (
                                        <div key={index} className="flex my-3 flex-col justify-start items-start mb-2">
                                          <div>
                                              <span className="font-semibold text-lg">{item.name}</span>
                                              <span> - {item.price.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}</span>
                                          </div>
                                          {item.modifications?.map((modification, modIndex) => (
                                            <span key={modIndex} className="text-sm text-gray-500">
                                              {modification.type}: {modification.selectedOption}
                                            </span>
                                          ))}
                                        </div>
                                      ))
                                    }
                                    <Separator className="my-3" />
                                    <span className="text-2xl font-bold">Total: {cartItems.reduce((total, item) => total + item.price, 0).toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}</span>
                                  </div>
                                </CarouselItem>
                                <CarouselItem>
                                  <h1 className="text-3xl font-semibold">Step 2</h1>
                                  <Separator className="my-3"/>
                                  <span>Scan this QR code and pay the total amount: {cartItems.reduce((total, item) => total + item.price, 0).toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}</span>
                                  <div className="w-full flex justify-center items-center mt-4">
                                    <Image width={200} height={200} src={"/qr.jpg"} alt={""} />
                                  </div>
                                  <br />
                                  <strong>Note: screenshot your gcash transaction, this will serve as your proof of payment</strong> 
                                  <br />
                                  <br />
                                  <span className="mt-5">After this, send us the printed order details and Gcash transaction receipt at <a className="text-sky-700 cursor-pointer" href="https://www.instagram.com/communehaus" target="_blank" rel="noopener noreferrer">@communehaus</a></span>
                                  <br />  
                                  <br />
                                </CarouselItem>
                              </CarouselContent>
                              <CarouselPrevious />
                              <CarouselNext />
                            </Carousel>
                          </div>
                      </DialogContent>
                    </Dialog>
                  </SheetFooter>
              </SheetContent>
  )
}