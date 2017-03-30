class Removematchcolumnfrommessage < ActiveRecord::Migration[5.0]
  def change
    remove_column :messages, :match_id
  end
end
