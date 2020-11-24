class My::BandsController < ApplicationController

  def index
    @bands = Band.joins(:members).where(members: { user_id: current_user })
  end

end
