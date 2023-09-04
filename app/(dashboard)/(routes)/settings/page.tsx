import { Settings } from "lucide-react"

import { Heading } from "@/components/heading"

// import { SubscriptionButton } from "@/components/subscription-button";
// import { checkSubscription } from "@/lib/subscription";

const SettingsPage = async () => {
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
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          {isPro
            ? "You are currently on a Pro plan."
            : "You are currently on a free plan."}
        </div>
        {/* <SubscriptionButton isPro={isPro} /> */}
      </div>
    </div>
  )
}

export default SettingsPage
