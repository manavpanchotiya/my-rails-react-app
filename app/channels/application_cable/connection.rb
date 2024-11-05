# app/channels/application_cable/connection.rb
module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def connect
      self.current_user = find_verified_user
      logger.add_tags 'ActionCable', current_user.email  # Optional: for debugging
    end

    private

    def find_verified_user
      # Extract JWT token from the query params (sent in the WebSocket URL)
      token = request.params[:token]
      if token
        begin
          token = token.gsub('Bearer', '').strip
          # Decode the JWT token using Devise JWT's secret key
          decoded_token = JWT.decode(token, ENV.fetch('JWT_SECRET', nil))[0]

          user_id = decoded_token['sub']  # 'sub' holds the user ID in Devise JWT
          # Find the user based on the decoded user ID
          User.find_by(id: user_id) || reject_unauthorized_connection
        rescue JWT::DecodeError => e
          reject_unauthorized_connection
        end
      else
        reject_unauthorized_connection
      end
    end
  end
end
