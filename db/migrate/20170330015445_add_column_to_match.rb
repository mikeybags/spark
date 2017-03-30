class AddColumnToMatch < ActiveRecord::Migration[5.0]
  def change
    add_column :matches, :rejected, :boolean, :default => false
  end
end
