json.items do
  @items.each do |item|
    json.set! item.id do
      json.id item.id
      json.title item.title
      json.description item.description
      json.photoUrls item.photos.map { |file| url_for(file) }
      json.price item.price

      json.genderId item.gender_id
      json.brandId item.brand_id
      json.colorId item.color_id
      json.sellerId item.seller_id

      json.gender item.gender.name
      json.brand item.brand.name
      json.color item.color.name
      json.seller item.seller.username
    end
  end
end