class Recording < ApplicationRecord
  belongs_to :user
  belongs_to :partition
end
