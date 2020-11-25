class RecordingsController < ApplicationController

  def create
    @recording = Recording.new(recording_params)
    @recording.user = current_user
    @track = Track.find(params[:track_id])

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
