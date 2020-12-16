class BandsController < ApplicationController
  def show
    @band = Band.find(params[:id])
    @track = Track.new
    @member = Member.new
  end

  def create
    @band = Band.new(band_params)
    @band.creation_year = Date.today.year unless @band.creation_year != ""
    member = Member.new(user: current_user, band: @band)

    if @band.save && member.save
      redirect_to band_path(@band)
    else
      @band = Band.new
      render 'my/bands/index'
    end
  end

  private

  def band_params
    params.require(:band).permit(:name, :description, :creation_year, :photo)
  end
end
