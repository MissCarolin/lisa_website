Rails.application.routes.draw do
  devise_for :users
 root to: 'pictures#index'
 get '/impressum', to: 'pictures#impressum', as: :impressum
  resources :pictures, only: [:index, :show, :new, :create, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
