# frozen_string_literal: true

class ApplicationController < ActionController::Base
  include RackSessionFix
  before_action :refresh_jwt_if_needed
  before_action :configure_permitted_parameters, if: :devise_controller?
  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

  def self.session_store
    :disabled
  end

  # Global handling for unauthorized access
  def user_not_authorized(exception)
    # if request.format.json?
      render json: { error: "You are not authorized to perform this action." }, status: :forbidden
    # end
  end

  def refresh_jwt_if_needed
    return unless user_signed_in? && current_user

    if request.headers['Authorization'].present?
      expiration_time = JWT.decode(request.headers['Authorization'].split.last,
                                   ENV.fetch('JWT_SECRET', nil))[0]['exp']
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


  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_in, keys: [:otp_attempt])
  end
end
