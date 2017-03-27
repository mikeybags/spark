class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :email
      t.date :birthday
      t.integer :height
      t.string :body_type
      t.string :relationship_status
      t.boolean :have_children
      t.integer :number_children
      t.string :want_children
      t.string :education_level
      t.string :smoker
      t.string :drinker
      t.string :ethnicity
      t.string :religion
      t.string :salary
      t.text :bio
      t.string :profile_picture
      t.integer :zipcode

      t.timestamps
    end
  end
end
