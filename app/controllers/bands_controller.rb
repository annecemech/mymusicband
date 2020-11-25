class BandsController < ApplicationController

  def show
    @band = Band.find(params[:id])
    @track = Track.all
    @user = User.all
  end

end
