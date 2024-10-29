# frozen_string_literal: true

class CreateOrganizationSettings < ActiveRecord::Migration[7.0]
  def change
    create_table :organization_settings do |t|
      t.string :title, null: false, index: true # For different settings names
      t.jsonb :metadata, null: false, default: {} # Store head elements in JSONB
      t.timestamps
    end
  end
end
