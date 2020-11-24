class My::BandsController < ApplicationController

  def index
    @bands = Band.where(user: current_user)
  end

end
