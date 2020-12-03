class InspirationsController < ApplicationController
  def create
    @inspiration = Inspiration.new(inspiration_params)
    @inspiration.user = current_user
    @track = Track.find(params[:track_id])
    @inspiration.track = @track

    @recording = Recording.new
    @partition = Partition.new

    if @inspiration.save
      redirect_to track_path(@track)
    else
      @comment = Comment.new
      render 'tracks/show'
    end
  end

  def update
    @inspiration = Inspiration.find(params[:id])
    @inspiration.update(inspiration_params)
    redirect_to track_path(params[:track_id])
  end

  def destroy
    @inspiration = Inspiration.find(params[:id])
    @inspiration.destroy
    redirect_to track_path(params[:track_id])
  end

  private

  def inspiration_params
    params.require(:inspiration).permit(:name, :resource)
  end
end
