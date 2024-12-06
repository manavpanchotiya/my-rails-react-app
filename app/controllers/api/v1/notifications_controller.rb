# frozen_string_literal: true

module Api
  module V1
    class NotificationsController < Api::V1::BaseController
      before_action :authenticate_user!

      # GET /notifications
      def index
        @notifications = current_user.notifications
        has_unread = current_user.notifications.unread.count.positive?
        render_json(notifications: @notifications, has_unread: has_unread)
      end

      # PATCH /notifications/mark_all_as_read
      def mark_all_as_read
        current_user.notifications.update_all(read: true)
        render_json(message: 'All notifications marked as read')
      end

      private

      # Only allow a list of trusted parameters through.
      def notification_params
        params.require(:notification).permit(:title, :body, :url, :read)
      end
    end
  end
end
