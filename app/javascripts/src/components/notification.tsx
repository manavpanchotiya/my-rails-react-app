import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { Bell } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area"
import { formatDistanceToNow, parseISO } from "date-fns";

import useNotificationsChannel from '@/hooks/use-notification-channel';
import { fetch, allRead } from '@/apis/notificationsApi';

export function Notification() {
   const [notifications, setNotifications] = useState<Notification[]>([]);
   const [hasUnread, setHasUnread] = useState(false);
   const [loading, setLoading] = useState(true);
    useNotificationsChannel((data) => {
    setNotifications((prev) => [
      { title: data.title, body: data.bod, created_at: data.created_at },
      ...prev,
    ]);
    setHasUnread(true)
  });

  const formatTimeAgo = (dateString: string): string => {
    const date = parseISO(dateString);
    return formatDistanceToNow(date, { addSuffix: true });
  };

   useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const response = await fetch();
      setNotifications(response.data.notifications);
      setHasUnread(response.data.has_unread);
    } catch (error) {
      console.warn(error)
      setError('Error fetching categories');
    } finally {
      setLoading(false);
    }
  };

  const markAllAsRead = async () => {
    try {
      await allRead();
      // Update the notifications state to reflect that they are read
      setNotifications((prev) => prev.map(notification => ({ ...notification, read: true })));
    } catch (error) {
      console.error('Error marking all notifications as read:', error);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          {/* Bell Icon */}
          <Bell className="h-[1.1rem] w-[1.2rem] transition-all dark:-rotate-90 dark:scale-0" />
          <Bell className="absolute h-[1.1rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

          {/* Badge Dot */}
          {hasUnread && (
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500" />
          )}

          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-[300px]">
        <div className="flex items-center justify-between px-4 py-2">
          <DropdownMenuLabel>Notifications</DropdownMenuLabel>
          <Button variant="link" className="text-sm" onClick={markAllAsRead}>
            Mark all as read
          </Button>
        </div>

        <DropdownMenuSeparator />
        <DropdownMenuGroup>
        <ScrollArea className="h-72 rounded-md border">
          {!loading && notifications.map((notification, index) => (
            <DropdownMenuItem  key={index} className={`${!notification.read ? 'bg-gray-100' : ''}`}>
              <div
                key={index}
                className={`mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0`}
              >

                <span className={`flex h-2 w-2 ${!notification.read ? 'translate-y-1 rounded-full bg-sky-500' : ''}`} />

                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {notification.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {formatTimeAgo(notification.created_at)}
                  </p>
                </div>
              </div>
            </DropdownMenuItem>
          ))}
          </ScrollArea>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Button variant="link" className="text-sm w-full" onClick={() => {/* Handle mark all as read */}}>
              <Link to="/notification">
                See All
              </Link>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
