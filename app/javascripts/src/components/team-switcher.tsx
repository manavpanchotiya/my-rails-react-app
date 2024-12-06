import * as React from "react"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

interface Profile {
  first_name?: string;
  last_name?: string;
  image_url?: string;
}

interface User {
  email: string;
  profile?: Profile;
}

// Define TeamSwitcherProps
interface TeamSwitcherProps {
  user: User;
}


export function TeamSwitcher({ user }: TeamSwitcherProps) {
const { profile } = user;
  //const [activeTeam, set] = React.useState(teams[0])
const formatName = (user) => {
  const profile = user.profile;
  if (profile && profile.first_name && profile.last_name) {
    // Concatenate first letters of first and last name
    return `${profile.first_name[0]}${profile.last_name[0]}`.toUpperCase();
  } else {
    // Fallback to first two letters of email if profile or names are missing
    return user.email;
  }
};
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <Avatar className="h-8 w-8 rounded-lg">
            <AvatarImage src={profile?.image_url} alt={profile?.first_name} />
            <AvatarFallback className="rounded-lg">{formatName(user)}</AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">{profile?.first_name} {profile?.last_name}</span>
            <span className="truncate text-xs">{user?.email}</span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
