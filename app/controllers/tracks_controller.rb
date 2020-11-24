class TracksController < ApplicationController

  def show
    @track = Track.find(params[:id])
    @comment = Comment.new
    @recording = Recording.new
    @partition = Partition.new
    @inspiration = Inspiration.new
  end

end
