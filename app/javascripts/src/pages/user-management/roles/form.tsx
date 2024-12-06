import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { resourceFormSchema, ResourceFormValues } from './formSchema'; // Import form schema
import { update, create } from '@/apis/rolesApi';
import { Icons } from "@/components/icons";

interface ResourceProps {
  resource?: Resource; // category is optional now
  onSave: (resource: ResourceFormValues) => void;
  onOpenChange?: (isOpen: boolean) => void;
}

export function ResourceForm({ resource, onSave, ...props }: ResourceProps) {
  const [isProcessing, setIsProcessing] = useState(false);

  const form = useForm<ResourceFormValues>({
    resolver: zodResolver(resourceFormSchema),
    defaultValues: {
      name: resource?.name ?? "", // Set default name for edit, empty for new
    },
  });

  useEffect(() => {
    form.reset({
      name: resource?.name ?? "",
    });
  }, [resource, form]);

  async function onSubmit(input: ResourceFormValues) {
    setIsProcessing(true);
    try {
      if (resource) {
        const response = await update(resource.id, input);
        const { notice } = response.data;
        form.reset();
        props.onOpenChange?.(false);
        toast.success(notice);
        onSave(input);
      } else {
        const response = await create(input);
        form.reset();
        props.onOpenChange?.(false);
        onSave(input);
        const { notice } = response.data;
        toast.success(notice);
      }
    } catch (err) {
      const { errors } = err.response.data;
      toast.error(errors);
    } finally {
      setIsProcessing(false);
    }
  }

  return (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Category Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <SheetFooter className="gap-2 pt-2 sm:space-x-0">
              <SheetClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </SheetClose>
              <Button disabled={isProcessing}>
                {isProcessing && (
                  <Icons.spinner
                    className="mr-2 size-4 animate-spin"
                    aria-hidden="true"
                  />
                )}
                Save
              </Button>
            </SheetFooter>
          </form>
        </Form>
  );
}
