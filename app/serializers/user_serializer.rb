class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :past_orders
  has_many :orders
  has_many :orders_i_made
  has_many :items
end
