class Track < ApplicationRecord
  belongs_to :band
  has_many :comments
  has_many :inspirations
  has_many :partitions
  has_many :recordings, through: :partitions
  has_one_attached :photo

  validates :title, presence: true
end
