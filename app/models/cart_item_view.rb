class CartItemView < ApplicationRecord
  
  has_one :item, class_name: Item, foreign_key: "item_id"

  def self.CartItemsByUser(userId)
    sql = "select * from vw_cart_items where buyer_id = " + userId
    cart_items = CartItem.connection.select_all(sql)
    # ActiveRecord::Base.connection.execute(sql)
    return cart_items
  end
end
