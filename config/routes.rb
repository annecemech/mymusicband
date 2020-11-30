Rails.application.routes.draw do
  devise_for :users
  root to: 'my/bands#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/test", to: 'pages#test'

  namespace :my do
    resources :bands, only:[:index]
  end

  resources :bands, only: [:show]

  resources :tracks, only:[:index, :show, :create] do
    resources :comments, only:[:create]
    resources :partitions, only:[:create, :show]
    resources :recordings, only:[:index, :create]
    resources :inspirations, only:[:create]
  end

  resources :partitions, only: [:show]

end


