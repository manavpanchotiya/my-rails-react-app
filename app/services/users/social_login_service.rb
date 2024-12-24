# frozen_string_literal: true

# app/services/users/social_login_service.rb
module Users
  # app/services/users/social_login_service.rb
  class SocialLoginService
    GOOGLE_TOKEN_INFO_URL = 'https://oauth2.googleapis.com/tokeninfo'

    PROVIDER_VALIDATORS = {
      'google' => ->(token) { validate_google_token(token) },
      'github' => ->(token) { validate_github_token(token) },
      'linkedin' => ->(token) { validate_linkedin_token(token) }
    }.freeze

    def self.call(provider:, token:)
      raise 'Invalid provider' unless PROVIDER_VALIDATORS.key?(provider)

      user_info = PROVIDER_VALIDATORS[provider].call(token)
      find_or_create_user(user_info, provider)
    end

    def self.validate_google_token(token)
      uri = URI("#{GOOGLE_TOKEN_INFO_URL}?id_token=#{token}")
      response = Net::HTTP.get_response(uri)
      raise 'Invalid Google token' unless response.is_a?(Net::HTTPSuccess)

      payload = JSON.parse(response.body)
      raise 'Invalid Google token' if payload['aud'] != ENV['GOOGLE_CLIENT_ID']

      {
        email: payload['email'],
        name: payload['name'],
        first_name: payload['given_name'],
        last_name: payload['family_name']
      }
    end

    def self.validate_github_token(token)
      response = HTTParty.get('https://api.github.com/user', {
                                headers: { 'Authorization' => "Bearer #{token}" }
                              })
      raise 'Invalid GitHub token' unless response.code == 200

      {
        email: response.parsed_response['email'],
        name: response.parsed_response['name'],
        first_name: response.parsed_response['name']&.split&.first,
        last_name: response.parsed_response['name']&.split&.last
      }
    end

    def self.validate_linkedin_token(token)
      response = HTTParty.get('https://api.linkedin.com/v2/me', {
                                headers: { 'Authorization' => "Bearer #{token}" }
                              })
      raise 'Invalid LinkedIn token' unless response.code == 200

      {
        email: nil, # LinkedIn API may not return email here, require another request for it
        name: "#{response.parsed_response['localizedFirstName']} #{response.parsed_response['localizedLastName']}",
        first_name: response.parsed_response['localizedFirstName'],
        last_name: response.parsed_response['localizedLastName']
      }
    end

    def self.find_or_create_user(user_info, provider)
      user = User.find_or_create_by(email: user_info[:email]) do |u|
        u.provider = provider
      end
      # Create or update profile
      user.build_profile unless user.profile

      user.profile.update(
        first_name: user_info[:first_name],
        last_name: user_info[:last_name]
      )

      user
    end
  end
end
