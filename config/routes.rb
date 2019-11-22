Rails.application.routes.draw do
  root "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    resources :favorites, only: [:index, :create, :destroy]
    resources :cart_items, only: [:create, :destroy, :index] do
      collection do
        delete 'checkout'
      end
    end
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :items, only: [:index, :show,:create] do
      resources :reviews, only: [:index, :create, :show]
      collection do
         get 'search', :key => :search_query
      end
    end
  end
end
