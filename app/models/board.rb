class Board < ApplicationRecord
  validates :category, :description, presence: true
  validates :category, uniqueness: true

  has_many :posts, dependent: :destroy
end
