class AddColumnToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :personality, :string
  end
end
