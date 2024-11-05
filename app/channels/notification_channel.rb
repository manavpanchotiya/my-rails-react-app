class NotificationChannel < ApplicationCable::Channel
  def subscribed
    stream_for current_user
    Rails.logger.info("User #{current_user.id} subscribed to NotificationChannel")
  end

  def unsubscribed
    Rails.logger.info("User #{current_user.id} unsubscribed from NotificationChannel")
  end
end
