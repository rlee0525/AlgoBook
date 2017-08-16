Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :boards
  end

  root "static_pages#root"
end
