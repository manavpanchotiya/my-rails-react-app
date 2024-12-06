import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import { ResourceFormValues } from './resourceFormSchema'; // Import form schema
import { ResourceForm } from "./form"

interface ResourceProps {
  resource?: Resource; // category is optional now
  onSave: (resource: ResourceFormValues) => void;
  onOpenChange?: (isOpen: boolean) => void;
  modelName?: string;
}

export function ResourceSheet({ resource, modelName, onSave, ...props }: ResourceProps) {
  return (
    <Dialog {...props}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{resource ? `Edit ${modelName}` : `New ${modelName}`}</DialogTitle>
          <DialogDescription>
            {`Manage your ${modelName} here.
              You can add new ${modelName}, edit existing ones, or remove ${modelName}
              as needed. Click save to apply your changes.`}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <ResourceForm resource={resource} onSave={onSave} {...props} />
        </div>
      </DialogContent>
    </Dialog>
  );
}