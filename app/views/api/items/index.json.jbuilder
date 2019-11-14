brands = []
colors = []
genders = []
sellers = []

@items.each do |item|
  brands << item.brand if !brands.include?(item.brand)
  colors << item.color if !colors.include?(item.color)
  genders << item.gender if !genders.include?(item.gender)
  sellers << item.seller if !sellers.include?(item.seller)
end

json.brands do
  brands.each do |brand|
    json.set! brand.id do
      json.id brand.id
      json.name brand.name
    end
  end
end

json.colors do
  colors.each do |color|
    json.set! color.id do
      json.id color.id
      json.name color.name
    end
  end
end

json.genders do
  genders.each do |gender|
    json.set! gender.id do
      json.id gender.id
      json.name gender.name
    end
  end
end

json.users do
  sellers.each do |seller|
    json.set! seller.id do
      json.id seller.id
      json.name seller.username
    end
  end
end

json.items do
  @items.each do |item|
    json.set! item.id do
      json.id item.id
      json.description item.description
      json.photos item.photos
      json.price item.price

      json.genderId item.gender_id
      json.brandId item.brand_id
      json.colorId item.color_id
      json.sellerId item.seller_id
    end
  end
end
