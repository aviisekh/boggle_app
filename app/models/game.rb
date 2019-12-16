class Game < ApplicationRecord
  GAME_DURATION = 2.minutes
  has_secure_token :token
  serialize :found_words, Array
  belongs_to :board

  before_save {found_words.map!(&:upcase_and_strip)}

  def started_at
    created_at
  end

  def duration
    GAME_DURATION
  end

  def valid_word? word
    (self.board.valid_words - self.found_words).include?(word.upcase_and_strip)
  end
end
