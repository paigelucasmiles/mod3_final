Rails.application.routes.draw do
  resources :tags
  resources :topics
  resources :entries, only: [:index, :show, :create, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
