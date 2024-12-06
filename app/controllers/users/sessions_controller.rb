# frozen_string_literal: true

module Users
  class SessionsController < Devise::SessionsController
    protect_from_forgery unless: -> { request.format.json? }

    respond_to :json
    # POST /login (overriding Devise's create action)
    def create
      user = User.find_or_initialize_by(email: resource_params[:email])

      # If user is new, save and set up OTP
      user.save! if user.new_record?

      # Send OTP
      if user.persisted?
        user.otp_required_for_login = true
        user.otp_secret = User.generate_otp_secret
        user.save!
        puts "OTP Generated: #{user.current_otp}" if Rails.env.development?
        render json: { message: 'OTP sent successfully.', success: true, email: user.email }, status: :ok
      else
        render json: { error: 'Unable to process request.' }, status: :unprocessable_entity
      end
    end

    # POST /verify_otp
    def verify_otp
      user = User.find_by(email: resource_params[:email])
      if user&.validate_and_consume_otp!(resource_params[:otp_code])
        sign_in(user)
        respond_with(user)
      else
        render json: { error: 'Invalid OTP.' }, status: :unauthorized
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

    def respond_to_on_destroy
      if request.headers['Authorization'].present?

        jwt_payload = JWT.decode(request.headers['Authorization'].split.last,
                                 ENV.fetch('JWT_SECRET', nil)).first
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
