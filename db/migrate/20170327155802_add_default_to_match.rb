class AddDefaultToMatch < ActiveRecord::Migration[5.0]
  def change
    change_column :matches, :accepted, :boolean, :default => false
  end
end
