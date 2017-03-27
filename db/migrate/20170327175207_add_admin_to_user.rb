class AddAdminToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :admin_level, :integer
  end
end
