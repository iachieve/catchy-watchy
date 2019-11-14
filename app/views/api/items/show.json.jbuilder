json.item do 

  json.id @item.id
  json.description @item.description
  json.photos  @item.photos
  json.price @item.price
  json.genderId @item.gender_id
  json.brandId @item.brand_id
  json.colorId @item.color_id
  json.sellerId @item.seller_id

end

json.color do 
  json.extract! @item.color, :id, :name
end

json.brand do 
  json.extract! @item.brand, :id, :name
end
json.seller do 
  json.extract! @item.seller, :id, :username
end
json.gender do 
  json.extract! @item.gender, :id, :name
end

