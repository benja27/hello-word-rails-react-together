Rails.application.routes.draw do
  get 'greetings/random_greeting'
  get 'root/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'root#index'
  get '/api/random_greeting', to: 'greetings#random_greeting'
end
