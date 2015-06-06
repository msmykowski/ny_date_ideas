class DateIdeasController < ApplicationController
  def index
    @date_ideas = DateIdea.all

    render json: @date_ideas
  end
end
