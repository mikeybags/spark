class ChangeZipToString < ActiveRecord::Migration[5.0]
  def change
    change_column :users, :zipcode, :string
  end
end
