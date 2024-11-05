# frozen_string_literal: true

User.create!(email: 'thermic.arish@gmail.com', password: 'thermic.arish@gmail.com',
             password_confirmation: 'thermic.arish@gmail.com')

# Create Roles
%w[Admin SuperAdmin Guest User].each do |name|
  Role.create(name:)
end

# Create Permissions

# First, ensure all models are loaded
Rails.application.eager_load!

# Fetch all model names
model_names = ActiveRecord::Base.descendants.map(&:name)

MODEL_NAME=%w[
User
Profile
Category
Role
RolePermission
UserRole
].freeze
# Iterate through each model and create permissions for view and edit actions
MODEL_NAME.each do |name|
  Role.all.each do |role|
    RolePermission.create(role:, resource: name, action: :view)
  end
end
