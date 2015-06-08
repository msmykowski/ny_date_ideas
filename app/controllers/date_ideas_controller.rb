class DateIdeasController < ApplicationController

  def home
  end

  def index
    @date_idea = DateIdea.all.shuffle.first
    render json: @date_idea
  end
end
