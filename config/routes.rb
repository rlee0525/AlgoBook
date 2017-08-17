Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :boards
    get '/tposts/search', to: 'posts#search'
    resources :posts
    get '/tags/search', to: 'tags#search'
    resources :tags
    resources :taggings
  end
end
