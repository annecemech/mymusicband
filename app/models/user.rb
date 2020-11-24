class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :members
  has_many :inspirations
  has_many :partitions
  has_many :recordings
  has_many :comments
  has_many :bands, through: :members

  has_one_attached :avatar

  validates :first_name, presence: true
  validates :last_name, presence: true
end
