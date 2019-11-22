class Api::FavoritesController < ApplicationController
  def index
    @favorites = Favorite.references(:item).where(user_id: current_user.id)

  end

  def create
    @favorite = Favorite.new(favorite_params)
    @favorite.user_id = current_user.id
    if @favorite.save
        render :show 
    else
        render json: @favorite.errors.full_messages, status: 422
    end
  end

  def destroy
    @favorite = current_user.favorites.find(params[:id])
    if @favorite.destroy 
      render json: {favoriteId: params[:id]}

    else
        render json: @favorite.errors.full_messages, status: 422
    end
  end

  def favorite_params
    params.require(:favorite).permit(:item_id)
  end
end
