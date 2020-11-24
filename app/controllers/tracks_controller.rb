class TracksController < ApplicationController

  def show
    @track = Track.find(params[:id])
    @comment = Comment.new
  end

end
