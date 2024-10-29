# frozen_string_literal: true

class ApplicationController < ActionController::Base
  include RackSessionFix
  before_action :refresh_jwt_if_needed

  def refresh_jwt_if_needed
    return unless user_signed_in? && current_user

    if request.headers['Authorization'].present?
      expiration_time = JWT.decode(request.headers['Authorization'].split(' ').last,
                                   ENV['JWT_SECRET'])[0]['exp']
      time_left = Time.at(expiration_time) - Time.now
      # Refresh the token if it's about to expire (e.g., in the next 5 minutes)
      if time_left < 30.minutes.to_i
        new_token = current_user.generate_jwt
        puts "New Toekn #{new_token}"
        response.set_header('Authorization', "Bearer #{new_token}")
      end
    end
  rescue JWT::DecodeError
    # Handle token decode errors if needed
  end
end
