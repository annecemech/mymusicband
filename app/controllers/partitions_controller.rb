class PartitionsController < ApplicationController
  def show
    @partition = Partition.find(params[:id])
    @recording = Recording.all
  end

  def create
    @partition = Partition.new(partition_params)
    @partition.user = current_user
    @track = Track.find(params[:track_id])
    @partition.track = @track

    @recording = Recording.new
    @inspiration = Inspiration.new

    if @partition.save
      redirect_to track_path(@track)
    else
      @comment = Comment.new
      render 'tracks/show'
    end
  end

  private

  def partition_params
    params.require(:partition).permit(:name, :instrument_id, :resource)
  end
end
