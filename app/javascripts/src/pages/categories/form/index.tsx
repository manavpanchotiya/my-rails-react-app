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

import { categoryFormSchema, CategoryFormValues } from '.././categoryFormSchema'; // Import form schema
import { update, create } from '@/apis/categoriesApi';
import { Icons } from "@/components/icons";
import { CommonAlert } from "@/components/CommonAlert"

interface CategoryProps {
  category?: Category; // category is optional now
  onSave: (category: CategoryFormValues) => void;
  onOpenChange?: (isOpen: boolean) => void;
}

export function CategoryForm({ category, onSave, ...props }: CategoryProps) {
  const [isProcessing, setIsProcessing] = useState(false);

  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(categoryFormSchema),
    defaultValues: {
      name: category?.name ?? "", // Set default name for edit, empty for new
    },
  });

  useEffect(() => {
    form.reset({
      name: category?.name ?? "",
    });
  }, [category, form]);

  async function onSubmit(input: CategoryFormValues) {
    setIsProcessing(true);
    try {
      if (category) {
        const response = await update(category.id, input);
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
