// CategoriesPage.tsx
import { NavLink as Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Categories from "./categories"; // Adjust the path as needed

export default function CategoriesPage() {
  return (
      <Categories />

  );
}
