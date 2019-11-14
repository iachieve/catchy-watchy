class Api::ReviewsController < ApplicationController
  # before_action :require_login, only: [:create]

    # comment this out before going to production
    protect_from_forgery with: :null_session

  def index
    item = Item.includes(:reviews).find(params[:item_id])
    @reviews = item.reviews.includes(:author)
  end

  def create
    item = Item.find(params[:item_id])
    @review = Review.new(review_params)
    @review.author_id = current_user.id
    @review.item_id = item.id

    if @review.save
      render :show
    else
      render json: @review.errors.full_messages
    end
  end

  private
  def review_params
    params.require(:review).permit(:body, :rank, :item_id)
  end
end
