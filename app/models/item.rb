class Item < ApplicationRecord
  validates :description, :photos, :price, :gender_id, :brand_id, :color_id, :seller_id, presence: true
  
  belongs_to :seller,
  class_name: :User,
  foreign_key: :seller_id
  

  belongs_to :gender,
  class_name: :Gender,
  foreign_key: :gender_id

   belongs_to :color,
  class_name: :Color,
  foreign_key: :color_id
  
    belongs_to :brand,
  class_name: :Brand,
  foreign_key: :brand_id

    has_many :reviews,
  class_name: :Review,
  foreign_key: :item_id
end
