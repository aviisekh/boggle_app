class Game < ApplicationRecord
  GAME_DURATION = 1.hour.minutes
  has_secure_token :token
  serialize :found_words, Array
  belongs_to :board

  before_save { found_words.map!(&:upcase_and_strip) }

  def started_at
    created_at
  end

  def duration
    GAME_DURATION
  end

  def valid_word? word
    (self.board.valid_words - self.found_words).include?(word.upcase_and_strip)
  end

  def submit_word! word
    if !time_out? || valid_word?(word)
      self.found_words << word
      self.save!
      true
    else
      false
    end
  end

  def time_out?
    started_at < Time.current - duration ? true : false
  end
end
