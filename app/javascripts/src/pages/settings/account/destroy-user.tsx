import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import { destroy } from '@/apis/usersApi';
import { toast } from "sonner";
import { useDispatch } from 'react-redux'
import { destroyUser } from "@/features/auth/authActions";

export function DeleteAccount() {
  const [isProcessing, setIsProcessing] = useState(false);

  const dispatch = useDispatch()

  const handleReload = () => {
    window.location.reload();
  };

  async function onSubmit() {
    setIsProcessing(true);
    try {
      const response = await destroy();
      const { notice } = response.data;

      // Show the success message
      toast.success(notice);

      if (response.data.success) {
        dispatch(destroyUser());

        // Delay the reload to give the toast time to display
        setTimeout(() => {
          handleReload();
        }, 2000); // 2 seconds delay
      }
    } catch (err) {
      const { errors } = err.response.data;
      toast.error(errors);
    } finally {
      setIsProcessing(false);
    }
  }


  return (
    <>
      <div className="flex w-full max-w-sm items-center space-x-2">
          <Button size="sm" variant="destructive"
            disabled={isProcessing} onClick={() =>onSubmit()}>
            {isProcessing && (
              <Icons.spinner
                className="mr-2 size-4 animate-spin"
                aria-hidden="true"
              />
            )}
          Delete My Account
        </Button>
      </div>
    </>
  );
}
