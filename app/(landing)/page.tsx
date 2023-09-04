import { SignInButton, SignOutButton } from "@/components/buttons"
import AuthProvider from "../AuthProvider"

const LandingPage = () => {
  return (
    <>
    <AuthProvider>
      <h1>Landing Page</h1>
      <SignInButton />
      <br />
      <SignOutButton />
      
    </AuthProvider>
    </>
  )
}

export default LandingPage
