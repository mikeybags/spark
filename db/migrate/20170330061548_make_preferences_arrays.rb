class MakePreferencesArrays < ActiveRecord::Migration[5.0]
  def change
    change_column :preferences, :relationship_status, "varchar[] USING (string_to_array(relationship_status, ','))"
    change_column :preferences, :smokes, "varchar[] USING (string_to_array(smokes, ','))"
    change_column :preferences, :ethnicity, "varchar[] USING (string_to_array(ethnicity, ','))"
    change_column :preferences, :drinks, "varchar[] USING (string_to_array(drinks, ','))"
    change_column :preferences, :religion, "varchar[] USING (string_to_array(religion, ','))"
    change_column :preferences, :education, "varchar[] USING (string_to_array(education, ','))"
    change_column :preferences, :salary, "varchar[] USING (string_to_array(salary, ','))"
  end
end
