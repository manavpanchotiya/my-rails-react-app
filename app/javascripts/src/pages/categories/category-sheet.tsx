import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";


import { categoryFormSchema, CategoryFormValues } from './categoryFormSchema'; // Import form schema
import { update, create } from '@/apis/categoriesApi';
import { Icons } from "@/components/icons";
import { CommonAlert } from "@/components/CommonAlert"
import { CategoryForm } from "./form"

interface CategoryProps {
  category?: Category; // category is optional now
  onSave: (category: CategoryFormValues) => void;
  onOpenChange?: (isOpen: boolean) => void;
}

export function CategorySheet({ category, onSave, ...props }: CategoryProps) {
  return (
    <Sheet {...props}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{category ? 'Edit Category' : 'New Category'}</SheetTitle>
          <SheetDescription>
            {category
              ? "Make changes to your category here. Click save when you're done."
              : "Create a new category here. Click save when you're done."}
          </SheetDescription>
        </SheetHeader>
        <CategoryForm category={category} onSave={onSave} { ...props } />
      </SheetContent>
    </Sheet>
  );
}
