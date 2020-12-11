class Band < ApplicationRecord
  has_many :members
  has_many :users, through: :members
  has_many :tracks

  has_one_attached :photo

  validates :name, presence: true

end
