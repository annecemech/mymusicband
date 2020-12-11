class BandsController < ApplicationController

  def show
    @band = Band.find(params[:id])
  end

  def create
    @band = Band.new(band_params)

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
