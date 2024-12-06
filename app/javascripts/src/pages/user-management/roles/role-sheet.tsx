import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import { ResourceFormValues } from './resourceFormSchema'; // Import form schema
import { ResourceForm } from "./form"

interface RoleProps {
  resource?: Resource; // category is optional now
  onSave: (resource: ResourceFormValues) => void;
  onOpenChange?: (isOpen: boolean) => void;
  modelName?: string;
}

export function RoleSheet({ modelName, resource, onSave, ...props }: RoleProps) {
  return (
    <Dialog {...props}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{resource ? `Edit ${modelName}` : `New ${modelName}`}</DialogTitle>
          <DialogDescription>
            {`Manage your ${modelName} here.
              You can add new ${modelName}, edit existing ones, or remove ${modelName}
              as needed. Click save to apply your changes.`}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <ResourceForm resource={resource} onSave={onSave} { ...props } />
        </div>
        <DialogFooter>

        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
