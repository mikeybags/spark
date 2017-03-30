class ChangeViewColumnToUser < ActiveRecord::Migration[5.0]
  def change
    change_column :users, :profile_viewed, :integer, :default => 0
  end
end
