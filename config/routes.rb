Rails.application.routes.draw do
  devise_for :users
 root to: 'pages#home'
 get '/impressum', to: 'pictures#impressum', as: :impressum
 get '/contact', to: 'pictures#contact', as: :contact

  resources :pictures, only: [:index, :show, :new, :create, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
