# frozen_string_literal: true

# models/role.rb
class Role < ApplicationRecord
  validates :name, presence: true, uniqueness: { case_sensitive: false }

  has_many :user_roles
  has_many :users, through: :user_roles

  has_many :role_permissions

  scope :excluding_super_admin, -> { where.not(name: 'SuperAdmin') }
end
