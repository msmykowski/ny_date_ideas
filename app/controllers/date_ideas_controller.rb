class DateIdeasController < ApplicationController

  def index
    date_ideas = DateIdea.select(:title, :copy_one, :copy_two, :link).first

    respond_to do |format|
      format.html
      format.json { render json: date_ideas }
    end
  end

end
