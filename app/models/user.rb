class User < ApplicationRecord
    has_secure_password
    has_many :orders_i_made, class_name: 'Order'
    has_many :items
    has_many :orders, through: :items

    validates :username, uniqueness: {case_sensitive: false}
    validates :password, presence: true


    def past_orders
        all_past_orders = self.orders.where(accepted: true)
        all_past_orders.map do |order|
            OrderSerializer.new(order)
        end
    end

end
