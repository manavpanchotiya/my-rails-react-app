import * as React from "react";
import { useDispatch } from "react-redux";
//import { verifyOtp, resendOtp } from "@/features/auth/authActions"; // Replace with your actual OTP verification and resend actions
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export function OtpVerification() {
  const dispatch = useDispatch();
  const [otp, setOtp] = React.useState("");
  const [timer, setTimer] = React.useState(60); // Timer set to 60 seconds
  const [isResendDisabled, setIsResendDisabled] = React.useState(true);

  // Countdown timer effect
  React.useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(countdown);
    } else {
      setIsResendDisabled(false); // Enable resend button when timer reaches 0
    }
  }, [timer]);

  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const handleOtpSubmit = () => {
   // dispatch(verifyOtp(otp));
  };

  const handleResendOtp = () => {
   // dispatch(resendOtp());
    setTimer(60); // Reset timer
    setIsResendDisabled(true);
  };

  return (

<div className="flex items-center justify-center min-h-screen p-4">
  <Card className="w-full max-w-sm mx-auto">
    <CardHeader className="space-y-1">
      <CardTitle className="text-2xl font-bold text-center">Enter OTP</CardTitle>
      <CardDescription className="text-center">Please enter the OTP sent to your email</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <div className="space-y-2 flex justify-center">
           <InputOTP maxLength={6} className="justify-center"
              onChange={(value) => {
                  handleOtpChange(value);
                  otpForm.setValue("otp", value); // update form value
                }}
              >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
         <Button
          type="button"
          onClick={handleOtpSubmit}
          className="w-full"
          disabled={otp.length < 6}
        >
        Submit OTP
      </Button>

        <div className="flex justify-between items-center mt-4">
        <Button
          type="button"
          variant="link"
          onClick={handleResendOtp}
          className="size-xs"
          disabled={isResendDisabled}
        >
          Resend OTP
        </Button>
        <span className="text-sm">
          {isResendDisabled ? `Resend in ${timer}s` : "You can now resend OTP"}
        </span>
      </div>

      </div>
    </CardContent>
  </Card>
</div>



  );
}
