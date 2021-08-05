class Item < ApplicationRecord
    has_many :orders, dependent: :destroy
end
