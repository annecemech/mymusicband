class Inspiration < ApplicationRecord
  belongs_to :track
  belongs_to :user

  validates :name, presence: true

  has_one_attached :resource
end
