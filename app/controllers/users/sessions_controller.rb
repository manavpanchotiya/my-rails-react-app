# frozen_string_literal: true

module Users
  class SessionsController < Devise::SessionsController
    protect_from_forgery unless: -> { request.format.json? }

    respond_to :json

    def create
      user = User.find_by(email: resource_params[:email])

      if user
        user.generate_otp!
        render json: { message: "OTP sent to your email." }, status: :ok
      else
        # Optionally create a new user if not found
        user = User.new(email: resource_params[:email])
        if user.save
          user.generate_otp!
          render json: { message: 'New user created and OTP sent.' }, status: :ok
        else
          render json: { error: 'Invalid email.' }, status: :unprocessable_entity
        end
      end
    end

    def verify_otp

    end

    private

    def respond_with(resource, _opts = {})
      permissions = current_user&.role_permissions&.pluck(:resource, :action)&.as_json
      user_profile = resource&.profile
      image_url = user_profile&.image_url || nil
      profile = user_profile&.as_json&.merge(image_url:)

      render json: {
        success: true,
        message: 'Logged in successfully.',
        data: resource.as_json.merge(profile:, permissions:),
        isLoggedIn: current_user.present?
      }, status: :ok
    end

    def respond_to_on_destroy
      if request.headers['Authorization'].present?

        jwt_payload = JWT.decode(request.headers['Authorization'].split.last,
                                 Rails.application.credentials.devise_jwt_secret_key!).first
        current_user = User.find(jwt_payload['sub'])
      end
      if current_user
        render json: {
          status: 200,
          message: 'Logged out successfully.'
        }, status: :ok
      else
        render json: {
          status: 401,
          message: "Couldn't find an active session."
        }, status: :unauthorized
      end
    end
  end
end
