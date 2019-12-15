class Board < ApplicationRecord
  serialize :tiles, Array
  validates_presence_of :tiles

  has_many :games
end
