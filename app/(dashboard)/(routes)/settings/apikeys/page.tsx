import { Settings, Webhook } from "lucide-react"

import { prisma } from "@/lib/prisma"
import { Heading } from "@/components/heading"

const APIkeys = () => {
  const isPro = false
  // const apicheck =  await prisma.user.apicheck
  return (
    <>
      <Heading
        title="API Keys"
        description="API Keys allow you to authenticate your account when using our API."
        icon={Webhook}
        iconColor="text-violet-500"
        bgColor="bg-violet-100"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          Hello world
        </div>
      </div>
    </>
  )
}

export default APIkeys
