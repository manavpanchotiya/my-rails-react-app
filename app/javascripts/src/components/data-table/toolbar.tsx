import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";

// Toolbar component to handle actions like Add New and Delete Selected
export function Toolbar({ onAddNew, onDeleteSelected, hasSelection }: ToolbarProps) {
  return (
    <div className="flex justify-between py-4">
      <Button size="sm" onClick={onAddNew}>
        <PlusIcon className="mr-2 size-4" aria-hidden="true" />
        New Category
      </Button>
      {hasSelection && (
        <Button size="sm" variant="destructive" onClick={onDeleteSelected}>
          Delete Selected
        </Button>
      )}
    </div>
  );
}
