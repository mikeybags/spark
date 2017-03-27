class CreateMatches < ActiveRecord::Migration[5.0]
  def change
    create_table :matches do |t|
      t.references :requester
      t.references :acceptor
      t.boolean :accepted

      t.timestamps
    end
  end
end
