import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";


import { ResourceFormValues } from './resourceFormSchema'; // Import form schema
import { ResourceForm } from "./form"

interface ResourceProps {
  resource?: Resource; // category is optional now
  onSave: (resource: ResourceFormValues) => void;
  onOpenChange?: (isOpen: boolean) => void;
  modelName?: string;
}

export function ResourceSheet({ resource, onSave, modelName, ...props }: ResourceProps) {
  return (
    <Sheet {...props}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{resource ? `Edit ${modelName}` : `New ${modelName}`}</SheetTitle>
          <SheetDescription>
            {resource
              ? `Make changes to your ${modelName} here. Click save when you're done.`
              : `Create a new ${modelName} here. Click save when you're done.`}
          </SheetDescription>
        </SheetHeader>
        <ResourceForm resource={resource} onSave={onSave} { ...props } />
      </SheetContent>
    </Sheet>
  );
}
