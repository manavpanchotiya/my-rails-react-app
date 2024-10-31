import { Separator } from "@/components/ui/separator"
import { AccountForm } from "./account-form"
import { ChangePasswordForm } from "./change-password-form"
import { DeleteAccount } from "./destroy-user"
export default function SettingsAccountPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Account</h3>
        <p className="text-sm text-muted-foreground">
          Update your account settings. Set your preferred language and
          timezone.
        </p>
      </div>
      <Separator />
      <AccountForm />
      <ChangePasswordForm/>
      <DeleteAccount/>
    </div>
  )
}