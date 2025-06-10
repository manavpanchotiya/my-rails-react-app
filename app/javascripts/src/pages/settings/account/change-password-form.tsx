import { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icons } from "@/components/Icons";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { CommonSheet } from "@/components/CommonSheet";
import { changePassword } from '@/apis/usersApi';
import { toast } from "sonner";

export function ChangePasswordForm() {
  const [isProcessing, setIsProcessing] = useState(false);

  const [isSheetOpen, setSheetOpen] = useState(false);

  const changeEmailFormSchema = z.object({
    current_password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
    password_confirmation: z.string().min(6, { message: "Password must be at least 6 characters long" }),
  });

  const form = useForm({
    resolver: zodResolver(changeEmailFormSchema),
    mode: "onChange",
    defaultValues: { // Set default values here
      current_password: '',
      password: '',
      password_confirmation: '',
    },
  });

  async function onSubmit(data) {
    setIsProcessing(true);
    try {
      const response = await changePassword({ user: data });
      const { notice } = response.data;
      toast.success(notice);
      form.reset(); // Resetting form values
      setSheetOpen(false);
    } catch (err) {
      const { errors } = err.response.data;
      toast.error(errors);
    } finally {
      setIsProcessing(false);
    }
  }

  useEffect(() => {
    if (isSheetOpen) {
      form.reset({
        current_password: '',
        password: '',
        password_confirmation: '',
      });
    }
  }, [isSheetOpen, form]);

  return (
    <>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="password" id="email" placeholder="Email" value="****************" disabled />
        <Button size="sm" onClick={() => setSheetOpen(true)} type="submit">Change Password</Button>
      </div>

      <CommonSheet
        open={isSheetOpen}
        setSheetOpen={setSheetOpen}
        title="Change Password"
      >
        <div className="grid gap-4 py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="current_password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Current password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="New password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password_confirmation"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Confirm password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button size="sm" disabled={isProcessing}>
                {isProcessing && (
                  <Icons.spinner
                    className="mr-2 size-4 animate-spin"
                    aria-hidden="true"
                  />
                )}
                Change Email
              </Button>
            </form>
          </Form>
        </div>
      </CommonSheet>
    </>
  );
}
