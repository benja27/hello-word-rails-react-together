Rails.application.routes.draw do
  get 'greetings/random_greeting'  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'root#index'
  get '/api/random_greeting', to: 'greetings#random_greeting_api'
  get '/greeting', to: 'greetings#random_greeting'
end
