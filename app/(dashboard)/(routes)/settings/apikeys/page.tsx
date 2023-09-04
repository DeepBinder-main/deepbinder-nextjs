import {Webhook ,Settings } from "lucide-react"
import { Heading } from "@/components/heading"

const APIkeys = () => {
  const isPro = false

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
          {isPro
            ? "You are currently on a Pro plan."
            : "You are currently on a free plan."}
        </div>
        {/* <SubscriptionButton isPro={isPro} /> */}
      </div></>
  )
}

export default APIkeys
