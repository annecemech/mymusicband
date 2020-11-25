class Partition < ApplicationRecord
  belongs_to :user
  belongs_to :track
  has_many :recordings

  validates :name, presence: true
  validates :instrument, presence: true
end
