class CartItem < ApplicationRecord
  validates :buyer_id, :item_id, :qty, presence: true
  validates :qty, numericality: { only_integer: true }
  
  belongs_to :item,
  class_name: :Item,
  foreign_key: :item_id

  belongs_to :buyer,
  class_name: :User,
  foreign_key: :buyer_id

  has_one :color, through: :item
  has_one :brand, through: :item
  has_one :gender, through: :item
  
  # has_many :photos,
  # through: :item,
  # source: :photos
  
end