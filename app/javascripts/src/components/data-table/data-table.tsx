"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"
import { ConfirmationDialog } from '@/components/confirmation-dialog'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PlusIcon } from "@radix-ui/react-icons"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type DataTableProps<TData> = {
  data: TData[]
  columns: ColumnDef<TData>[]
  filterColumns: { name: string, type: "text" | "dropdown", options?: string[] }[] // filter config
  filterPlaceholder?: string
  onRowSelectionChange?: (selectedRows: TData[]) => void
}

export function DataTable<TData>({
  data,
  columns,
  filterColumns,
  modelName,
  selectedRows = [],
  filterPlaceholder = "Filter...",
  onDelete,
  onNewItem,
  setRowSelection,
  rowSelection=[],
  isDialogOpen,
  setDialogOpen,
}: DataTableProps<TData>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  const handleTextFilterChange = (columnId: string, value: string) => {
    table.getColumn(columnId)?.setFilterValue(value)
  }

  const handleDropdownFilterChange = (columnId: string, value: string) => {
    table.getColumn(columnId)?.setFilterValue(value)
  }

  return (
    <div className="w-full">
      {/* Flex container for filter inputs */}
      <div className="flex items-center justify-between py-4">
        <div className="flex space-x-4">
          {/* Dynamically generate filters */}
          {filterColumns?.length > 0 && filterColumns.map((filter) => (
            <div key={filter.name}>
              {filter.type === "text" && (
                <Input
                  placeholder={filterPlaceholder || `Filter by ${filter.name}`}
                  value={(table.getColumn(filter.name)?.getFilterValue() as string) ?? ""}
                  onChange={(event) => handleTextFilterChange(filter.name, event.target.value)}
                  className="max-w-sm"
                />
              )}
              {filter.type === "dropdown" && filter.options && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-40">
                      {`Filter by ${filter.name}`}
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Select {filter.name}</DropdownMenuLabel>
                    {filter.options.map((option) => (
                      <DropdownMenuItem
                        key={option}
                        onClick={() => handleDropdownFilterChange(filter.name, option)}
                      >
                        {option}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          ))}
        </div>

        {/* New Category and Delete Selected buttons aligned to the right */}
        <div className="flex items-center space-x-2">
          {selectedRows.length > 0 && (
            <Button
              size="sm"
              variant="destructive"
              className="ml-4"
              onClick={() => setDialogOpen(true)}
            >
              {`(${selectedRows.length}) Delete Selected`}
            </Button>
          )}

          {onNewItem && (
            <Button size="sm" onClick={onNewItem}>
              <PlusIcon className="mr-2 size-4" aria-hidden="true" />
              New {modelName}
            </Button>
          )}
        </div>
      </div>

      {/* Confirmation dialog for deletion */}
      <ConfirmationDialog
        open={isDialogOpen}
        onOpenChange={setDialogOpen}
        onConfirm={onDelete}
        title={`Delete ${selectedRows.length > 0 ? `Selected ${modelName}s` : modelName}`}
        description={`Are you sure you want to delete ${selectedRows.length} selected ${modelName.toLowerCase()}(s)?`}
      />

      {/* Table rendering */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination controls */}
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
            Previous
          </Button>
          <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
