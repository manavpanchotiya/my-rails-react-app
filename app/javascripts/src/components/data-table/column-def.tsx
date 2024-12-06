import * as React from "react";
import {
  ColumnDef,
} from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Generic function to create column definitions
type ColumnConfig<TData> = {
  key: keyof TData;
  header: string | React.ReactNode;
  isSortable?: boolean;
  renderCell?: (value: any) => React.ReactNode;
  dropdownItems?: { label: string; onClick: (row: TData) => void }[];
  enableSelection?: boolean; // Option to enable row selection
};

export function createColumns<TData>(
  configs: ColumnConfig<TData>[]
): ColumnDef<TData>[] {
  // Column for row selection
  const selectColumn: ColumnDef<TData> = {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  };

  // Column for actions
  const actionColumn: ColumnDef<TData> = {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const data = row.original;
      const config = configs.find((c) => c.dropdownItems);

      // Generate a unique key for dropdown items
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            {config?.dropdownItems?.map((item, index) => (
              <DropdownMenuItem
                key={`${row.id || row.index}_${index}_${item.label}`} // Ensure unique keys for dropdown items
                onClick={() => item.onClick(data)}
              >
                {item.label}
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  };

const mainColumns = configs
  .filter((config) => config.key !== "" && config.key !== "actions") // Filter out columns with empty keys or "actions"
  .map((config) => ({
    accessorKey: config.key,
    header: config.isSortable
      ? ({ column }) => (
          <Button
            variant="ghost"
            onClick={() =>
              column.toggleSorting(column.getIsSorted() === "asc")
            }
          >
            {config.header}
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      : config.header,
    cell: ({ row, row: { index } }) => {
      const value = row.getValue(config.key);
      // Check if it's the "index" column, and display the row's index + 1
      if (config.key === "index") {
        return index + 1; // Display serialized ID (index + 1)
      }
      return config.renderCell ? config.renderCell(value, row, index) : value;
    },
  }));

  const includeSelectColumn = configs.some((c) => c.enableSelection);
  const includeActionColumn = configs.some((c) => c.dropdownItems);

  // Return columns with conditional selection and actions
  return [
    ...(includeSelectColumn ? [selectColumn] : []),
    ...mainColumns,
    ...(includeActionColumn ? [actionColumn] : []),
  ];
}
