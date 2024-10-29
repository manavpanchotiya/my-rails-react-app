# frozen_string_literal: true

# models/role.rb
class Role < ApplicationRecord
  default_scope { where.not(name: 'SuperAdmin') }

  validates :name, presence: true, uniqueness: { case_sensitive: false }

  has_many :user_roles
  has_many :users, through: :user_roles

  has_many :role_permissions
end
