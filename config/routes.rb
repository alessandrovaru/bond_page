Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'articles/index'
      get 'articles/create'
      get 'articles/show'
      get 'articles/destroy'
    end
  end
  get 'homepage/index'

  

  root 'homepage#index'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
