# frozen_string_literal: true

# Create Roles
%w[Admin SuperAdmin Guest User].each do |name|
  Role.create(name:)
end

user = User.create!(email: 'thermic.arish@gmail.com', password: 'thermic.arish@gmail.com',
             password_confirmation: 'thermic.arish@gmail.com')

user.assign_default_role(role_name: 'Admin')

MODEL_NAME=%w[
User
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
