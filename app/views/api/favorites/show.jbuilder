json.favorite do
  json.id @favorite.id
  json.itemId @favorite.item_id
  json.userId @favorite.user_id

  json.description @favorite.item.description
  json.photoUrls @favorite.item.photos.map { |file| url_for(file) }
  json.price @favorite.item.price
  json.colorName @favorite.item.color.name
  json.brandName @favorite.item.brand.name
  json.genderName @favorite.item.gender.name
end