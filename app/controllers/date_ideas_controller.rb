class DateIdeasController < ApplicationController

  def home
    @date_idea = DateIdea.all.shuffle.first
  end

  def index
    date_ideas = DateIdea.select(:title, :copy_one, :copy_two, :link).shuffle
    render json: date_ideas
  end

end
