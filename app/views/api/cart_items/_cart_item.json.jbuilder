json.cartItem do
  json.id @cart_item['id']
  json.buyerId @cart_item['buyer_id']
  json.itemId @cart_item['item_id']
  json.qty @cart_item['qty']
  json.description @cart_item['description']
  json.photos @cart_item['photos']
  json.price @cart_item['price']
  json.colorName @cart_item['color_name']
  json.brandName @cart_item['brand_name']
  json.genderName @cart_item['gender_name']
end