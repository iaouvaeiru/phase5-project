class OrderSerializer < ActiveModel::Serializer
  attributes :id, :bid, :accepted
  belongs_to :item
end
