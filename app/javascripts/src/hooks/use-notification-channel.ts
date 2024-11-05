// hooks/useNotificationsChannel.ts
import { useEffect } from 'react';
import cable from '@/channels/cable';
import { toast } from 'sonner';
const useNotificationsChannel = (onReceived: (data: any) => void) => {
  useEffect(() => {
    const subscription = cable.subscriptions.create('NotificationChannel', {
      received(data) {
        onReceived(data);
        toast.info(data.title, {
            position:"top-right",
            description: data.body,
        });
      },
    });

    return () => {
      cable.subscriptions.remove(subscription);
    };
  }, [onReceived]);
};

export default useNotificationsChannel;
