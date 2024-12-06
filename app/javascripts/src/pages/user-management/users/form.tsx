import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { fetch } from '@/apis/rolesApi';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Icons } from "@/components/icons";
import {
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet";
import { MultiSelect } from "@/components/multi-select";

import { resourceFormSchema, ResourceFormValues } from './formSchema';
import { updateUser as update, createUser as create } from '@/apis/usersApi';

interface ResourceProps {
  resource?: User;
  onSave: (resource: ResourceFormValues) => void;
  onOpenChange?: (isOpen: boolean) => void;
}

export function ResourceForm({ resource, onSave, ...props }: ResourceProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [availableRoles, setAvailableRoles] = useState([]);
  const [selectedRoleIds, setSelectedRoleIds] = useState([]);

  useEffect(() => {
    fetchAvailableRoles();
  }, []);

  const fetchAvailableRoles = async () => {
    try {
      const response = await fetch();
      setAvailableRoles(response.data.roles);
    } catch (error) {
      console.warn(error)
      toast.error('Error fetching roles');
    }
  };

  const form = useForm<ResourceFormValues>({
    resolver: zodResolver(resourceFormSchema),
    defaultValues: {
      email: resource?.email ?? "",
      firstName: resource?.profile?.first_name ?? "",
      lastName: resource?.profile?.last_name ?? "",
      role_ids: resource?.role_ids ?? [],
    },
  });

  useEffect(() => {
    if (resource) {
      form.reset({
        email: resource?.email ?? "",
        firstName: resource?.profile?.first_name ?? "",
        lastName: resource?.profile?.last_name ?? "",
        role_ids: resource?.role_ids ?? [],
      });
      setSelectedRoleIds([...resource.role_ids]);
      console.log(resource.role_ids)
    }
  }, [resource, form]);

  async function onSubmit(input: ResourceFormValues) {
    setIsProcessing(true);
    try {
      const userPayload = {
        user: {
          email: input.email,
          password: input.password, // Add password field if necessary
          profile_attributes: {
            id: resource?.profile?.id ?? "",
            first_name: input.firstName,
            last_name: input.lastName,
          },
          role_ids: selectedRoleIds, // Sending the array of role_ids directly
        },
      };

      if (resource) {
        const response = await update(resource.id, userPayload);
        const { notice } = response.data;
        form.reset();
        props.onOpenChange?.(false);
        toast.success(notice);
        onSave(input);
      } else {
        const response = await create(userPayload);
        form.reset();
        props.onOpenChange?.(false);
        onSave(input);
        const { notice } = response.data;
        toast.success(notice);
      }
    } catch (err) {
      const { errors } = err.response.data;
      console.log(errors);
    } finally {
      setIsProcessing(false);
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto"> {/* Wider modal/sheet */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <h3>User</h3>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <h3>Profile</h3>
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter First Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Last Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="role_ids"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Roles</FormLabel>
                <FormControl>
                  <MultiSelect
                    options={availableRoles.map(role => ({
                      value: role.id,
                      label: role.name,
                    }))}
                    onValueChange={(value) => {
                      setSelectedRoleIds(value);
                      field.onChange(value);
                    }}
                    defaultValue={field.value}
                    modalPopover={true}
                    placeholder="Select roles"
                    variant="inverted"
                    animation={2}
                    maxCount={3}
                  />
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
            <Button disabled={isProcessing || !form.formState.isValid}>
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
    </div>
  );
}
