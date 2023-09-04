"use client"

import React from "react"
import { CalendarDays, Ghost, Menu } from "lucide-react"
import { signOut, useSession } from "next-auth/react"

import {
  Avatar,
  Avatar as AvatarComponent,
  AvatarFallback,
  AvatarFallback as AvatarFallbackComponent,
  AvatarImage,
  AvatarImage as AvatarImageComponent,
} from "@/components/ui/avatar"

import { AvatarImg } from "./AuthCheck"
import { SignOutButton } from "./buttons"
import {
  MobileSidebar,
  MobileSidebar as MobileSidebarComponent,
} from "./mobile-sidebar"
import { Button as Btn, Button } from "./ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card"
import { NavigationMenuDemo } from "./navigationmenu"

const Navbar = () => {
  const { data: session, status } = useSession()
  if (status === "authenticated") {
    return (
      <div className="flex items-center p-4">
        <Btn variant="ghost" size="icon" className="md:hidden">
          <MobileSidebar apiLimitCount={0} isPro={false} />
        </Btn>
        <div className="flex w-full justify-end">
          <NavigationMenuDemo />
        </div>
      </div>
    )
  }
}

export { Navbar }

export default Navbar

