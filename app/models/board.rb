class Board < ApplicationRecord
  validates :category, :description, presence: true
  validates :cateogry, uniqueness: true

  has_many :posts, dependent: :destroy
end
