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
              <SheetTrigger className="fixed flex flex-row shadow-md hover:shadow-lg justify-center items-center rounded-full p-5 bg-white bottom-5 right-5 md:bottom-10 md:right-10">
                <ShoppingCart className='w-7 h-7 cursor-pointer font-bold' />
              </SheetTrigger>
              <SidebarRight />
            </Sheet>
            <Toaster />
        </div>
    </SidebarProvider>
  )
}