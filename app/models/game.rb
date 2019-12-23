class Game < ApplicationRecord
  GAME_DURATION = 2.minutes
  has_secure_token :token
  serialize :found_words, Array
  belongs_to :board

  before_save { found_words.map!(&:upcase_and_strip) }

  def self.highscores
    self.all.sort_by(&:score).reverse.first(10).map{|x| {score: x.score, name: x.token}}
  end
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
    if !time_out? and valid_word?(word)
      self.found_words << word
      self.save!
      true
    else
      false
    end
  end

  def score
    found_words.inject(0){|sum, element| sum+element.length}
  end

  def remaining_time
    [((started_at + GAME_DURATION) - Time.current), 0].max.round(0)
  end

  def time_out?
    started_at < Time.current - duration ? true : false
  end
end
