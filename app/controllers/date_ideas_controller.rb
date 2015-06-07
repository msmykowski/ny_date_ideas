class DateIdeasController < ApplicationController

  def home
  end

  def index
    @date_ideas = DateIdea.all.shuffle.first
    render json: @date_ideas
  end
end
