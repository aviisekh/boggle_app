class Board < ApplicationRecord
  serialize :tiles
  validates_presence_of :tiles
end
