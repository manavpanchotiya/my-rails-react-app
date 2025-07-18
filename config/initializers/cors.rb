# frozen_string_literal: true

# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins ENV.fetch('APP_URL', 'http://localhost:3000')
    if ->(env) { env['HTTP_GALAXY_HEADER'] == 'arish' }
      resource '*',
               headers: %w[Authorization],
               methods: :any,
               expose: ['Authorization']
    end
  end
end
