import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetFooter
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cart } from "@/store"
import { useAtom } from "jotai"
import Image from "next/image"

export function SidebarRight() {
  const [cartItems] = useAtom(cart)

  return (
              <SheetContent>
                <SheetHeader className="mt-10">
                  <SheetTitle className="text-2xl font-benguiat">
                    Cart
                  </SheetTitle>
                  <Separator />
                  <SheetDescription>
                    {cartItems.length === 0 ? (
                      <div className="text-center text-gray-500">
                        Your cart is empty.
                        </div>
                        ) : (
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
                        )}
                  </SheetDescription>
                  </SheetHeader>
                  <SheetFooter>
                    <Button variant={"default"}>Checkout</Button>
                  </SheetFooter>
              </SheetContent>
  )
}