# app/controllers/api/v1/social_auth_controller.rb
module Api
  module V1
    class SocialAuthController < BaseController
      def authenticate
        provider = params[:provider]
        token = params[:token]

        begin
          user = Users::SocialLoginService.call(provider: provider, token: token)
          sign_in(user)
          respond_with(user)
        rescue StandardError => e
          render json: { error: e.message }, status: :unprocessable_entity
        end
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
    end
  end
end
