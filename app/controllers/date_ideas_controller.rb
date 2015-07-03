class DateIdeasController < ApplicationController

  def index
    date_ideas = DateIdea.select(:title, :copy_one, :copy_two, :link).shuffle
    render json: date_ideas
  end

  def home

  end

end
