class Band < ApplicationRecord
  has_many :members
  has_many :users, through: :members
  has_many :tracks

  validates :name, presence: true
  validates :description, presence: true
end
