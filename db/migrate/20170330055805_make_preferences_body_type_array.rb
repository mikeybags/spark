class MakePreferencesBodyTypeArray < ActiveRecord::Migration[5.0]
  def change
    change_column :preferences, :body_type, "varchar[] USING (string_to_array(body_type, ','))"
  end
end
