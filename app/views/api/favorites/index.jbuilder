json.favorites do
  @favorites.each do |fav|
    json.set! fav.id do
      json.id fav.id
      json.itemId fav.item_id
      json.userId fav.user_id

      json.title fav.item.title
      json.description fav.item.description
      json.photoUrls fav.item.photos.map { |file| url_for(file) }
      json.price fav.item.price
      json.colorName fav.item.color.name
      json.brandName fav.item.brand.name
      json.genderName fav.item.gender.name
    end
  end
end