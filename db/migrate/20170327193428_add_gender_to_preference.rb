class AddGenderToPreference < ActiveRecord::Migration[5.0]
  def change
    add_column :preferences, :gender, :string
  end
end
