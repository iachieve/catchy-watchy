class Gender < ApplicationRecord
  validates :name, presence: true

  has_many :item,
  class_name: :Item,
  foreign_key: :gender_id
end
