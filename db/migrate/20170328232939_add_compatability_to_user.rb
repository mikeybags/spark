class AddCompatabilityToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :compatability, :integer
  end
end
