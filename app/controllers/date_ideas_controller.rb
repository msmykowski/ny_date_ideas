class DateIdeasController < ApplicationController

  def index
    @date_idea = DateIdea.all.shuffle.first

    respond_to do |format|
      format.html
      format.json { render json: @date_idea}
    end
  end

end
