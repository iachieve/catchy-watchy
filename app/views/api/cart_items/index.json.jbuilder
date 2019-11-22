if @cart_items
  json.cartItems do
    @cart_items.each do |cartItem|
      json.set! cartItem.id do
        json.id cartItem.id
        json.buyerId cartItem.buyer_id
        json.itemId cartItem.item_id
        json.qty cartItem.qty
        json.total cartItem.total
        
        json.description cartItem.item.description
        json.photoUrls cartItem.item.photos.map { |file| url_for(file) }
        json.price cartItem.item.price
        json.colorName cartItem.item.color.name
        json.brandName cartItem.item.brand.name
        json.genderName cartItem.item.gender.name
      end
    end
  end
end