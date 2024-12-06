import React from "react";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

// Define the props interface
interface ListItemProps extends React.ComponentPropsWithoutRef<"div"> {
  title: string; // Title is required
  children?: React.ReactNode; // Children are optional
}

export const ListItem = React.forwardRef<HTMLDivElement, ListItemProps>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <div
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </div>
        </NavigationMenuLink>
      </li>
    );
  }
);

// Add displayName for debugging
ListItem.displayName = "ListItem";
