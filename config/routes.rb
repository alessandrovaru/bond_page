Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'articles/index'
      post 'articles/create'
      get '/show/:id', to: 'articles#show'
      delete '/destroy/:id', to: 'articles#destroy'
    end
  end
  get 'homepage/index'

  get '/articles', to: 'articles#index'

  get '/article/:id', to: 'articles#show'

  root 'homepage#index'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
