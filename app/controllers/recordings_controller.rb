class RecordingsController < ApplicationController

  def create
    @recording = Recording.new(recording_params)
    @track = @recording.track

    @recording.user = current_user
    if @recording.save
      redirect_to track_path(@track)
    else
      render 'tracks/show'
    end
  end

  private

  def recording_params
    params.require(:recording).permit(:name, :partition, :resource)
  end
end
