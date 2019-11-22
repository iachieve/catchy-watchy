json.cartItem do
    # json.set! @cart_item.id do
        json.id @cart_item.id
        json.buyerId @cart_item.buyer_id
        json.itemId @cart_item.item_id
        json.qty @cart_item.qty
        json.total @cart_item.total
        
        json.description @cart_item.item.description
        json.photoUrls @cart_item.item.photos.map { |file| url_for(file) }
        json.price @cart_item.item.price
        json.colorName @cart_item.item.color.name
        json.brandName @cart_item.item.brand.name
        json.genderName @cart_item.item.gender.name
    # end
end