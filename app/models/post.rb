class Post < ApplicationRecord
  validates :title, :description, :board_id, presence: true
  validates :title, uniqueness: true

  belongs_to :board
end
