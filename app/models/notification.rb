# frozen_string_literal: true

class Notification < ApplicationRecord
  belongs_to :user
  after_create_commit { NotificationChannel.broadcast_to(user, self) }

  scope :unread, -> { where(read: false) }
end
