# frozen_string_literal: true

class Profile < ApplicationRecord
  include Imagable
  belongs_to :user

  enum gender: {
    male: 0,
    female: 1,
    dont_specify: 2
  }

  validates :first_name, :last_name, presence: true

  # ActiveStorage association for profile image
  # has_one_attached :image

  # Optional: Add validation for the attached image
  # validate :acceptable_image

  def acceptable_image
    return unless image.attached?

    errors.add(:image, 'is too big') unless image.byte_size <= 5.megabytes

    acceptable_types = ['image/jpeg', 'image/png']
    return if acceptable_types.include?(image.content_type)

    errors.add(:image, 'must be a JPEG or PNG')
  end

  # private

  def image_url
    image.attached? ? Rails.application.routes.url_helpers.url_for(image.variant(:medium)) : nil
  end
end
