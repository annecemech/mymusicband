class Comment < ApplicationRecord
  belongs_to :track
  belongs_to :user

  validates :content, presence: true
end
