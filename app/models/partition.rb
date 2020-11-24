class Partition < ApplicationRecord
  belongs_to :user
  belongs_to :track

  validates :name, presence: true
  validates :instrument, presence: true

  has_one_attached :resource
end
