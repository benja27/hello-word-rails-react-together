class GreetingsController < ApplicationController
  def random_greeting
    random_greeting = Greeting.order('RANDOM()').first


    

    # render json: { message: random_greeting.message }
    render json: { message: random_greeting.greeting }
  end
end
