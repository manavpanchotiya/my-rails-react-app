import { BellRing, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

import { formatDistanceToNow, parseISO } from "date-fns";


import React, { useState, useEffect } from "react";
import { fetch, allRead } from '@/apis/notificationsApi';

type CardProps = React.ComponentProps<typeof Card>

export function Notifications({ className, ...props }: CardProps) {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [hasUnread, setHasUnread] = useState(false);
  const [loading, setLoading] = useState(true);

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
      setError('Error fetching categories');
    } finally {
      setLoading(false);
    }
  };

  const markAllAsRead = async () => {
    try {
      const response = await allRead();
      // Update the notifications state to reflect that they are read
      setNotifications((prev) => prev.map(notification => ({ ...notification, read: true })));
    } catch (error) {
      console.error('Error marking all notifications as read:', error);
    }
  };
  return (
    <Card className={cn("", className)} {...props}>
      <CardHeader>
        <div className="flex items-center justify-between px-4 py-2">
          <CardTitle>Notifications</CardTitle>
          <Button variant="link" className="text-sm" onClick={markAllAsRead}>
            Mark all as read
          </Button>

        </div>
        <div className="flex items-center justify-between px-4 py-2">
          <CardDescription>You have 3 unread messages.</CardDescription>
        </div>
      </CardHeader>
      <Separator className="mb-4"/>
      <CardContent className="grid gap-4">
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className={`flex h-2 w-2 ${!notification.read ? 'translate-y-1 rounded-full bg-sky-500' : ''}`} />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.body}
                </p>
                <p className="text-sm text-muted-foreground">
                  {formatTimeAgo(notification.created_at)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>

      </CardFooter>
    </Card>
  )
}