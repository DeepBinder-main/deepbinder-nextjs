"use client"

import Image from "next/image"
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "./ui/button"

export function SignInButton() {
  const { data: session, status } = useSession()
  console.log(session, status)

  if (status === "loading") {
    return <>...</>
  }else if (status === "authenticated") {
    return (
      // <Link href={`/dashboard`}>
      //   <Image
      //     src={session.user?.image ?? '/mememan.webp'}
      //     width={32}
      //     height={32}
      //     alt="Your Name"
      //   />
      // </Link>
      <Link href={`/dashboard`}>dashboard</Link>
    )
  }else if (status === "unauthenticated") {
    // return <Button onClick={() => signIn()}>Sign in</Button>
    return <Link href={`/authentication/login`}>Login</Link>
  }else {
    return null ;
  }
}

export function SignOutButton() {
  const { data: session, status } = useSession()
  // console.log(session, status)

  if (status === "loading") {
    return <>...</>
  } else if (status === "authenticated") {
    return <Button onClick={() => signOut()}>Sign out</Button>
  } else {
    return <p>Already signed out</p>
}
}
