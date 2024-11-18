import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"



export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
// Utility to check permissions
function hasPermission(permissions: string[][], resource: string): boolean {
  return permissions.some((permission) => permission[0] === resource);
}

const navMain = [
    {
      title: "Admin",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "User Management",
          url: "/user-management",
          permission: "User", // Required resource
        },
        {
          title: "Categories",
          url: "/categories",
          permission: "Category", // Required resource
        },
      ],
    },
  ];
  const { permissions } = props.user
   // Filter navMain based on permissions
    const filteredNavMain = navMain
    .map((item) => ({
      ...item,
      items: item.items?.filter((subItem) =>
        hasPermission(permissions, subItem.permission)
      ),
    }))
    .filter((item) => item.items?.length > 0);


  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher user={props.user} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={filteredNavMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={props.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
