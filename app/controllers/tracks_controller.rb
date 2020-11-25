class TracksController < ApplicationController
  def index
  end

  def show
    @track = Track.find(params[:id])
    @comment = Comment.new
  end

end
