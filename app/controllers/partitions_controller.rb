class PartitionsController < ApplicationController
  def show
    @partition = Partition.find(params[:id])
    @recording = Recording.all
  end
end
