import * as React from "react";
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation, matchRoutes, Link } from "react-router-dom";

export const iframeHeight = "800px"


export const description = "A sidebar that collapses to icons."

const routes = [
  { path: "/dashboard", breadcrumb: "Dashboard" },
  { path: "/building", breadcrumb: "Building Your Application" },
  { path: "/building/data-fetching", breadcrumb: "Data Fetching" },
  // Add other routes as necessary
];




function generateBreadcrumbs(location) {
  const matchedRoutes = matchRoutes(routes, location);
  if (!matchedRoutes) return null;

  return matchedRoutes.map((match, index) => {
    const { breadcrumb, path } = match.route;
    const isLast = index === matchedRoutes.length - 1;

    return (
      <BreadcrumbItem key={path} className="hidden md:block">
        {isLast ? (
          <BreadcrumbPage>{breadcrumb}</BreadcrumbPage>
        ) : (
          <BreadcrumbLink as={Link} to={path}>
            {breadcrumb}
          </BreadcrumbLink>
        )}
        {!isLast && <BreadcrumbSeparator className="hidden md:block" />}
      </BreadcrumbItem>
    );
  });
}


export default function PrivateLayout() {

  const { isLoggedIn } = useSelector((state) => state.auth);
  if (!isLoggedIn) {
    return <Navigate to="/sigin" replace />;
  }
  const location = useLocation();
  const breadcrumbs = generateBreadcrumbs(location);


  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>{breadcrumbs}</BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}