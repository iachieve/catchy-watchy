class Api::ItemsController < ApplicationController

  # before_action :require_login, only: [:index, :show]

  def index
    @items = Item.includes(:color, :brand, :gender, :seller).all
  end

  def show
    @item = Item.includes(:color, :brand, :gender, :seller).find(params[:id])
  end

end
