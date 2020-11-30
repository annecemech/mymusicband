class RecordingsController < ApplicationController

  def index
    @track = Track.find(params[:track_id])
  end

  def create
    @recording = Recording.new(recording_params)
    @recording.user = current_user
    @track = Track.find(params[:track_id])

    @partition = Partition.new
    @inspiration = Inspiration.new

    if @recording.save
      redirect_to track_path(@track)
    else
      @comment = Comment.new
      render 'tracks/show'
    end
  end

  private

  def recording_params
    params.require(:recording).permit(:name, :partition_id, :resource, :is_lead)
  end

end
