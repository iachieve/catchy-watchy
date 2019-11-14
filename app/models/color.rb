class Color < ApplicationRecord
  validates :name, presence: true

   has_many :items,
  class_name: :Item,
  foreign_key: :color_id

end
