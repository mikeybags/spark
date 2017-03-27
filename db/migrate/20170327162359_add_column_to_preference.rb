class AddColumnToPreference < ActiveRecord::Migration[5.0]
  def change
    add_column :preferences, :personalities, :string
  end
end
