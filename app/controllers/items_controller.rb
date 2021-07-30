class ItemsController < ApplicationController

    def index
        items = Item.all
        render json: items
    end

    def create
        item = Item.create!(item_params)
        render json: item
    end

    def destroy
        item = Item.find_by(id: params[:id])
        item.destroy
        render json: {}
    end

    private

    def item_params
        params.permit(:price, :name, :image, :description, :user_id)
    end
end
