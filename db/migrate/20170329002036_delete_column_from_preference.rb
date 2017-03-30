class DeleteColumnFromPreference < ActiveRecord::Migration[5.0]
  def change
    remove_column :preferences, :want_children
  end
end
