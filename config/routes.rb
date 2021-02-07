Rails.application.routes.draw do
  devise_for :users
 root to: 'pages#home'
 get '/impressum', to: 'pictures#impressum', as: :impressum
 get '/datenschutz', to: 'pictures#datenschutz', as: :datenschutz
 get '/contact', to: 'pictures#contact', as: :contact
 patch 'prints/:id', to: 'prints#update'
 patch 'pictures/:id', to: 'pictures#update'


  resources :pictures, only: [:index, :show, :new, :create, :edit, :destroy]
  resources :prints, only: [:index, :show, :new, :create, :edit, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
