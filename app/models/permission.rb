# frozen_string_literal: true

# models/permission.rb
class Permission < ApplicationRecord
  enum action: { view: 0, edit: 1 }

  has_many :role_permissions
  has_many :roles, through: :role_permissions

  validates :resource, uniqueness: { scope: :action, message: 'can only have one view and one edit' }
end
