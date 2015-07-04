class DateIdeasController < ApplicationController

  def index
    date_ideas = DateIdea.all.shuffle
    @date_idea = date_ideas.pop

    respond_to do |format|
      format.html
      format.json { render json: date_ideas }
    end
  end

end
