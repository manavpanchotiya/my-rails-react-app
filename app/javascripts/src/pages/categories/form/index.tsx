import { useState, useEffect } from "react";
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

import { resourceFormSchema, ResourceFormValues } from "../resourceFormSchema";
import { update, create } from "@/apis/categoriesApi";
import { Icons } from "@/components/Icons";

interface ResourceProps {
  resource?: Resource;
  onSave: (resource: ResourceFormValues) => void;
  onOpenChange?: (isOpen: boolean) => void;
}

export function ResourceForm({ resource, onSave, onOpenChange }: ResourceProps) {
  const [isProcessing, setIsProcessing] = useState(false);

  const form = useForm<ResourceFormValues>({
    resolver: zodResolver(resourceFormSchema),
    defaultValues: {
      name: resource?.name || "",
    },
  });

  useEffect(() => {
    // Reset form when the resource changes
    form.reset({
      name: resource?.name || "",
    });
  }, [resource, form]);

  const onSubmit = async (input: ResourceFormValues) => {
    setIsProcessing(true);

    try {
      let response;
      if (resource) {
        // Update the existing resource
        response = await update(resource.id, input);
      } else {
        // Create a new resource
        response = await create(input);
      }

      const { notice } = response.data; // Backend message
      form.reset();
      onOpenChange?.(false);
      onSave(input);
      toast.success(notice); // Show backend-provided success message
    } catch (err) {
      // Display backend-provided error messages
      const errorMessages = err.response?.data?.errors || "An error occurred";
      toast.error(errorMessages);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* Name Field */}
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

        {/* Footer Actions */}
        <SheetFooter className="gap-2 pt-2 sm:space-x-0">
          <SheetClose asChild>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </SheetClose>
          <Button type="submit" disabled={isProcessing}>
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
