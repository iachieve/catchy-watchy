Rails.application.routes.draw do
    root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :items, only: [:index, :show] do
      resources :reviews, only: [:index, :create, :show]
    end
  end
end
