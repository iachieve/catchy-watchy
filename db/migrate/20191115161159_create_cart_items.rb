class CreateCartItems < ActiveRecord::Migration[6.0]
  def change
    create_table :cart_items do |t|
      t.integer :buyer_id, null: false
      t.integer :item_id, null: false
      t.integer :qty, null: false, default: 1
      t.float :total, null: false

      t.timestamps
    end
    add_index :cart_items, :buyer_id
    add_index :cart_items, :item_id
  end
end
