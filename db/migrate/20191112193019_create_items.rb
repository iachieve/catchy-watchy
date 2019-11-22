class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.float :price, null: false
      t.integer :gender_id, null: false
      t.integer :brand_id, null: false
      t.integer :color_id, null: false
      t.integer :seller_id, null: false
      t.timestamps
    end
    add_index :items, :description
    add_index :items, [:title, :seller_id], unique: true
  end
end
