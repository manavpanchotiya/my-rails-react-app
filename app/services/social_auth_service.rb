require 'net/http'
require 'uri'
require 'json'

class SocialAuthService
  GOOGLE_TOKEN_INFO_URL = 'https://oauth2.googleapis.com/tokeninfo'
  GITHUB_USER_API_URL = 'https://api.github.com/user'
  LINKEDIN_USER_API_URL = 'https://api.linkedin.com/v2/me'

  def self.validate(provider:, token:)
    case provider
    when 'google'
      validate_google_token(token)
    when 'github'
      validate_github_token(token)
    when 'linkedin'
      validate_linkedin_token(token)
    else
      raise 'Unsupported provider'
    end
  end

  def self.validate_google_token(token)
    uri = URI("#{GOOGLE_TOKEN_INFO_URL}?id_token=#{token}")
    response = Net::HTTP.get_response(uri)
    if response.is_a?(Net::HTTPSuccess)
      payload = JSON.parse(response.body)
      raise 'Invalid Google token' if payload['aud'] != ENV['GOOGLE_CLIENT_ID']

      { email: payload['email'], name: payload['name'] }
    else
      raise 'Invalid Google token'
    end
  end

  def self.validate_github_token(token)
    uri = URI(GITHUB_USER_API_URL)
    request = Net::HTTP::Get.new(uri)
    request['Authorization'] = "Bearer #{token}"

    response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
      http.request(request)
    end

    if response.is_a?(Net::HTTPSuccess)
      payload = JSON.parse(response.body)
      { email: payload['email'], name: payload['name'] }
    else
      raise 'Invalid GitHub token'
    end
  end

  def self.validate_linkedin_token(token)
    uri = URI(LINKEDIN_USER_API_URL)
    request = Net::HTTP::Get.new(uri)
    request['Authorization'] = "Bearer #{token}"

    response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
      http.request(request)
    end

    if response.is_a?(Net::HTTPSuccess)
      payload = JSON.parse(response.body)
      { name: payload['localizedFirstName'] }
    else
      raise 'Invalid LinkedIn token'
    end
  end
end
