# frozen_string_literal: true

module Users
  class SessionsController < Devise::SessionsController
    protect_from_forgery unless: -> { request.format.json? }

    respond_to :json

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

        jwt_payload = JWT.decode(request.headers['Authorization'].split(' ').last,
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
