class CreatePreferences < ActiveRecord::Migration[5.0]
  def change
    create_table :preferences do |t|
      t.references :user, foreign_key: true
      t.integer :distance
      t.integer :minimum_age
      t.integer :maximum_age
      t.string :body_type
      t.string :relationship_status
      t.string :has_children
      t.string :want_children
      t.string :smokes
      t.string :drinks
      t.string :ethnicity
      t.string :religion
      t.string :education
      t.integer :minimum_height
      t.integer :maximum_height
      t.string :dealbreaker
      t.string :most_important

      t.timestamps
    end
  end
end
