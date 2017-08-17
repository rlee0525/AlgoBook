class Tag < ApplicationRecord
  validates :name, :post, presence: true
  validates :name, uniqueness: true

  has_many :taggings, dependent: :destroy
  has_many :posts, through: :taggings, source: :post
end
