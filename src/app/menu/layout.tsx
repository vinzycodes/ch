"use client"
import { SidebarProvider } from "@/components/ui/sidebar"
import { SidebarLeft } from "@/components/molecules/SidebarLeft"
import TopNavigationBar from "@/components/molecules/TopNavigationBar"
import {
  Sheet,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ShoppingCart } from "lucide-react"
import { SidebarRight } from "@/components/molecules/SidebarRight"
import { Toaster } from "@/components/ui/sonner"


export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <SidebarProvider defaultOpen={false}>
        <SidebarLeft/>
        <div className="w-screen h-screen bg-[#FBF8EF] relative overflow-scroll">
            <TopNavigationBar />
            <main className="w-[100%]">
                {children}
            </main>
            <Sheet>
              <SheetTrigger className="absolute top-9 right-10 pt-2">
                <ShoppingCart className='w-10 h-10 cursor-pointer' />
              </SheetTrigger>
              <SidebarRight />
            </Sheet>
            <Toaster />
        </div>
    </SidebarProvider>
  )
}