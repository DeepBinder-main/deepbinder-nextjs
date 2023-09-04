"use client"

import Image from "next/image"
import { useSession } from "next-auth/react"

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession()

  console.log(session, status)

  if (status === "authenticated") {
    return <>{children}</>
  } else {
    return <>Not logged in to see this</>
  }
}

export function AvatarImg() {
  const { data: session, status } = useSession()
  if (status === "authenticated") {
    return (
      <Image
        src={session.user?.image ?? "/mememan.webp"}
        width={10}
        height={10}
        alt={"avatar icon"}
      />
    )
  }
}
