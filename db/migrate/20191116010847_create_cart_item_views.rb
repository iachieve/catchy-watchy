class CreateCartItemViews < ActiveRecord::Migration[6.0]
  def up
    execute <<-SQL
      CREATE VIEW vw_cart_items AS
        SELECT 
          ci.id, ci.buyer_id, ci.item_id, ci.qty, ci.total,
          items.description, items.price,
          colors.name AS color_name, 
          brands.name AS brand_name,
          genders.name AS gender_name
      FROM cart_items AS ci
        INNER JOIN items ON items.id = ci.item_id
        INNER JOIN colors ON colors.id = items.color_id
        INNER JOIN brands ON brands.id = items.brand_id
        INNER JOIN genders ON genders.id = items.gender_id
    SQL
  end
  def down
    execute <<-SQL
      DROP VIEW IF EXISTS vw_cart_items
    SQL
  end
end
