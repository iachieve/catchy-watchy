class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.text :body, null: false
      t.integer :rank, null: false
      t.integer :author_id, null: false
      t.integer :item_id, null: false
      t.timestamps
    end
      add_index :reviews, [:item_id, :author_id], unique: true
      add_index :reviews, :author_id
      add_index :reviews, :item_id
  end
end
