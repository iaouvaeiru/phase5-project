class ItemSerializer < ActiveModel::Serializer
  attributes :id, :price, :name, :image, :description, :sold, :user_id

end
