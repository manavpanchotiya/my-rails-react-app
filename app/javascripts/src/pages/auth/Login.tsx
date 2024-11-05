import { LoginForm } from "@/components/auth/login-form"

export const iframeHeight = "870px"

export const containerClassName = "w-full h-full"

export default function Login() {
  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <LoginForm />
    </div>
  )
}