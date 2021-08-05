class OrdersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_error
    def create
        order = Order.create!(order_params)
        render json: order
    end

    def reject
        order = Order.find_by(id: params[:id])
        order.update(:accepted => 'rejected')
        render json: order
    end

    def accept
        order = Order.find_by(id: params[:id])
        order.item.orders.map{|order| 
            if order.id == params[:id]
                order.update(:accepted => 'accepted')
                render json: order
            else
                order.update(:accepted => 'rejected')
            end
        }
        order.item.update(:sold => true)
    end

    private

    def order_params
        params.permit(:item_id, :user_id, :bid, :accepted)
    end

    def render_error(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
