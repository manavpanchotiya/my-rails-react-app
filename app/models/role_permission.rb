# frozen_string_literal: true

class RolePermission < ApplicationRecord
  belongs_to :role

  enum action: { view: 0, edit: 1 }

  # validates :role_id, uniqueness: { scope: :permission_id, message: 'already has this permission' }
end
