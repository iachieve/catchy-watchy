class Brand < ApplicationRecord
    validates :name, presence: true
    # change name form item to items
     has_many :item,
    class_name: :Item,
    foreign_key: :brand_id
end
