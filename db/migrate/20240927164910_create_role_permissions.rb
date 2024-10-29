# frozen_string_literal: true

class CreateRolePermissions < ActiveRecord::Migration[7.0]
  def change
    create_table :role_permissions do |t|
      t.references :role, null: false, foreign_key: true
      t.string :resource, null: false
      t.integer :action, null: false

      t.timestamps
    end
  end
end
