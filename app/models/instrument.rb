class Instrument < ApplicationRecord
  has_many :users
  has_many :partitions
end
