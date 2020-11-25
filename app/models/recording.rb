class Recording < ApplicationRecord
  belongs_to :user
  belongs_to :partition

  validates :name, presence: true

  has_one_attached :resource
end
