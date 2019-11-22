class CreateColors < ActiveRecord::Migration[6.0]
  def change
    create_table :colors do |t|
      t.string :name
      t.string :HEX
    end
    add_index :colors, :name
  end
end
