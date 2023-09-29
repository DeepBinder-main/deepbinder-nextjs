"use client"

import { Settings } from "lucide-react"
import { Metadata } from "next"
import { Heading } from "@/components/heading"
import { Separator } from "@/components/ui/separator"
import { SidebarNav } from "./components/sidebar-nav"

const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
}

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/examples/forms",
  },
  {
    title: "Account",
    href: "/examples/forms/account",
  },
  {
    title: "Appearance",
    href: "/examples/forms/appearance",
  },
  {
    title: "Notifications",
    href: "/examples/forms/notifications",
  },
  {
    title: "Display",
    href: "/examples/forms/display",
  },
]

interface SettingsLayoutProps {
  children: React.ReactNode
}

const SettingsPage = async ({ children }: SettingsLayoutProps) => {
  //   const isPro = await checkSubscription();

  const isPro = false
  return (
    <div>
      <Heading
        title="Settings"
        description="Manage account settings."
        icon={Settings}
        iconColor="text-violet-500"
        bgColor="bg-violet-100"
      />
      <div className="hidden space-y-6 p-10 pb-16 md:block">
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage
