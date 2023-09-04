import {Settings } from "lucide-react"
import { Heading } from "@/components/heading"
import {Wallet} from  "lucide-react"
const Billing = () => {
  const isPro = false

  return (
    <>
    <Heading
        title="View Billing"
        description="View your current plan, usage, and billing history. You can also upgrade your plan here."
        icon={Wallet}
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

export default Billing
