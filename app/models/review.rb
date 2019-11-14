class Review < ApplicationRecord
  validates :body, :rank, :author_id, :item_id, presence: true
  validates :rank, numericality: {only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 5}

  belongs_to :item,
  class_name: :Item,
  foreign_key: :item_id

  belongs_to :author,
  class_name: :User,
  foreign_key: :author_id
end
