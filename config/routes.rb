Rails.application.routes.draw do
  
  resources :reports
  resources :orders
  resources :items
  resources :users, only: [:create]

  get '/listings', to: 'items#index'
  post '/login', to: 'users#login'
  patch '/accept', to: 'orders#accept'
  patch '/reject', to: 'orders#reject'
  get '/me', to: 'users#me'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
