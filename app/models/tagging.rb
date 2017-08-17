class Tagging < ApplicationRecord
  validates :post, :tag, presence: true
  validates :post, uniqueness: { scope: :tag }

  belongs_to :post
  belongs_to :tag
end
