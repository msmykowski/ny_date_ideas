class DateIdeasController < ApplicationController
  caches_page :index

  def index
    date_ideas = DateIdea.select(:title, :copy_one, :copy_two, :link).shuffle
    
    respond_to do |format|
      format.json { render json: date_ideas }
      format.html
    end
  end

end
