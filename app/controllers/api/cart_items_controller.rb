class Api::CartItemsController < ApplicationController
      # comment this out before going to production
      protect_from_forgery with: :null_session
  def index
    if logged_in?
        @cart_items = CartItem.references(:buyer, :item).where("buyer_id = ?" , current_user.id)
    else
      render nil
    end
  end

  def create
    saved = false
    @cart_item = CartItem.references(:item).where('buyer_id = ? AND item_id = ?',current_user.id, params[:cart_item][:item_id]).first
    if @cart_item
      @cart_item.qty += 1
      @cart_item.total = @cart_item.qty * @cart_item.item.price
      saved = @cart_item.save
    else
        @cart_item = CartItem.new(cart_item_params)
        @cart_item.buyer_id = current_user.id
        saved = @cart_item.save
    end
    if saved
      render :show
    else
        render json: new_cart_item.errors.full_messages, status: 422
    end
  end

  def destroy
    @cart_item = CartItem.find(params[:id])
    @cart_item.destroy
    render json: {cartItemId: params[:id]}
  end

  def checkout
    CartItem.where(buyer_id: current_user.id).delete_all
    render json: ['thank you for your order'], status: 200
  end

  private
    def cart_item_params
      params.require(:cart_item).permit(:item_id, :qty, :total)
    end
end
