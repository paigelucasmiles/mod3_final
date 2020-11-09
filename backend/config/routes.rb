Rails.application.routes.draw do
  resources :tags
  resources :topics
  resources :entries
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
