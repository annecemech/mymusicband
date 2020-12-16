class TracksController < ApplicationController
  def index
  end

  def show
    @track = Track.find(params[:id])
    @comment = Comment.new
    @recording = Recording.new
    @partition = Partition.new
    @inspiration = Inspiration.new
  end

  def create
    @track = Track.new(track_params)

    @band = Band.find(params[:band_id])
    @track.band = @band

    # default values
    @track.duration = 180 unless @track.duration
    @track.tempo = 120 unless @track.tempo

    if @track.save
      redirect_to track_path(@track)
    else
      render 'bands/show'
    end
  end

  private

  def track_params
    params.require(:track).permit(:title, :artist, :style, :duration, :tempo, :pattern, :photo)
  end
end
