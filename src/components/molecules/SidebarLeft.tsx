import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { dummyData } from "@/lib/dummyData"

export function SidebarLeft() {
  return (
    <Sidebar className="p-5 bg-[rgba(255,255,255,0.7)])">
      <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <div className='flex flex-1 flex-col justify-center lg:mt-[150px]'>
                  {
                    dummyData.map(({category}, index) => (
                      <SidebarMenuItem key={index}>
                        <SidebarMenuButton className="h-max flex justify-start items-center cursor-pointer">
                          <li className='font-semibold text-3xl p-2 underline underline-offset-8 text-gray-700'>{category}</li>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))
                  }
              </div> 
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}