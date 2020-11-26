class Partition < ApplicationRecord
  belongs_to :user
  belongs_to :track
  has_many :recordings
  belongs_to :instrument
  has_one_attached :photo

  validates :name, presence: true
  validates :instrument, presence: true

  has_one_attached :resource
end
