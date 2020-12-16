Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :my do
    resources :bands, only:[:index]
  end

  resources :bands, only: [:show, :create] do
    resources :tracks, only:[:create]
  end

  resources :tracks, only:[:index, :show] do
    resources :comments, only:[:create]
    resources :partitions, only:[:create, :show, :destroy, :update]
    resources :recordings, only:[:index, :create, :destroy, :update]
    resources :inspirations, only:[:create, :update, :destroy]
  end

  resources :partitions, only: [:show]
  resources :inspirations, only: [:show]

end


