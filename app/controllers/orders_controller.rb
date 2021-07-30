class OrdersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_error
    def create
        order = Order.create!(order_params)
        render json: order
    end


    private

    def order_params
        params.permit(:item_id, :user_id, :bid, :accepted)
    end

    def render_error(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
