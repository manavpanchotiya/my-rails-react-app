import { useEffect } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const TABS = [
  { value: "users", title: "Users", path: "/user-management/users" },
  { value: "roles", title: "Roles", path: "/user-management/roles" },
  { value: "role-permissions", title: "Role Permissions", path: "/user-management/role-permissions" },
];

export default function UserManagementLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine the active tab based on the current path
  const activeTab = TABS.find(tab => tab.path === location.pathname)?.value || "users";
  // Handle tab click to navigate
  const handleTabClick = (path: string) => {
    navigate(path);
  };

  useEffect(() => {
    if (location.pathname === '/user-management') {
      navigate('/user-management/users');
    }
  }, [location, navigate]);

  return (

      <div className="overflow-hidden rounded-lg border bg-background shadow">
        <div className="hidden space-y-6 p-10 pb-16 md:block">
          <div className="space-y-0.5">
            <h2 className="text-2xl font-bold tracking-tight">User Management</h2>
            <p className="text-muted-foreground">
              Manage Users and their Roles and Permissions
            </p>
          </div>
          <Separator className="my-6" />
          <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
            <div className="flex-1">
              <Tabs defaultValue={activeTab}>
                <TabsList className={`grid w-full grid-cols-3 gap-4`}>
                  {TABS.map(tab => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      onClick={() => handleTabClick(tab.path)}
                    >
                      {tab.title}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {TABS.map(tab => (

                  <TabsContent key={tab.value} value={tab.value}>
                    <Separator className="my-6" />
                    {/* Child components or content */}
                    <Outlet/>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </div>

  );
}
