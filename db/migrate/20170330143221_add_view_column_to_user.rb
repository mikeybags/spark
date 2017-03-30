class AddViewColumnToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :profile_viewed, :integer
  end
end
