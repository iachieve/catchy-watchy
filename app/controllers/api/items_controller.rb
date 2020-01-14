class Api::ItemsController < ApplicationController
  before_action :require_login, only: [:index, :show]

  def search
    if params[:search_query] && params[:search_query].length >= 0
      @items = Item.references(:color, :brand, :gender, :seller).
        joins(:color, :brand, :gender).
        where(query("items.description") +
              " OR " + query("items.title") +
              " OR " + query("colors.name") +
              " OR " + query("brands.name"))
    else
      @items = Item.includes(:color, :brand, :gender, :seller).all
    end
    render :index
  end

  def query(column_name)
    " LOWER(" + column_name + ") LIKE '%" + params[:search_query].downcase + "%'" +
    " OR LOWER(" + column_name + ") LIKE '%" + params[:search_query].downcase.split("").join("%") + "%' "
  end

  def show
    @item = Item.includes(:color, :brand, :gender, :seller).find(params[:id])
  end

  def create
    @item = Item.new
    @item.seller_id = current_user.id
    @item.description = params[:item][:description]
    @item.title = params[:item][:title]
    @item.price = params[:item][:price]
    @item.gender_id = params[:item][:gender_id]
    @item.brand_id = params[:item][:brand_id]
    @item.color_id = params[:item][:color_id]
    @item.photos = params[:item][:photos]

    if @item.save!
      render :show
    else
      render json: @item.errors.full_messages, status: 422
    end
  end

  def item_params
    params.require(:item).permit(:title, :description, :price, :gender_id, :brand_id, :color_id, :photos[])
  end
end
