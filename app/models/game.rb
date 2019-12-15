class Game < ApplicationRecord
  GAME_DURATION = 2.minutes
  has_secure_token :token
  serialize :found_words, Array
  belongs_to :board

  def started_at
    created_at
  end

  def duration
    GAME_DURATION
  end
end
