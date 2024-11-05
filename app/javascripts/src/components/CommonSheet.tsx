import React from 'react';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose
} from "@/components/ui/sheet";

interface CommonSheetProps {
  open: boolean;
  setSheetOpen: () => void;
  title: string;
  description: string;
  children: React.ReactNode; // This will allow you to pass any form or content as children
}

export const CommonSheet: React.FC<CommonSheetProps> = ({
  open,
  title,
  description,
  setSheetOpen,
  children,
}) => {
  return (
    <Sheet
      open={open}
      onOpenChange={setSheetOpen}
    >
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>
            {description}
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {children}
        </div>
      </SheetContent>
    </Sheet>
  );
};
