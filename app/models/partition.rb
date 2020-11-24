class Partition < ApplicationRecord
  belongs_to :user
  belongs_to :track

  validates :name, presence: true
  validates :instrument, presence: true

  def show
    @track = Track.find(params[:id])
    @partition = Partition.new
  end
end
