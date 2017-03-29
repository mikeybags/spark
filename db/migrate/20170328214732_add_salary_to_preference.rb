class AddSalaryToPreference < ActiveRecord::Migration[5.0]
  def change
    add_column :preferences, :salary, :string
  end
end
