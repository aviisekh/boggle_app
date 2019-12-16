class Board < ApplicationRecord
  serialize :tiles, Array

  has_many :games
  validates_presence_of :tiles
  before_validation :generate_random_tiles

  def valid_word?(word)
    word = BoggleWord.new(word)
    any_tile? do |tile|
      is_word_composable_from_tile?(tile, word)
    end
  end

  def print_to_console
    puts "Here's the board:"
    normalized_tiles.each(&:print_to_console)
  end

  def valid_words
    dictionary = File.read("vendor/dictionary.txt").split("\n")
    dictionary.select { |word| valid_word?(word) }.map(&:upcase)
  end

  def normalized_tiles
    tiles.each_with_index.map { |letter, position| Tile.new(letter, position) }
  end

  private

  def any_tile?
    normalized_tiles.any? { |tile| yield(tile) }
  end

  def is_word_composable_from_tile?(tile, word, used_tiles: [])
    return true if word.length == 0
    return false unless tile.matches(word.first_letter)
    temp_used_tiles = used_tiles + [tile]
    (get_adjacent_tiles(tile) - used_tiles).any? do |adjacent_tile|
      is_word_composable_from_tile?(
        adjacent_tile,
        word.second_letter_onwards,
        used_tiles: temp_used_tiles
      )
    end
  end
  
  # Gets the adjacent tiles
  # @param tile [Tile]
  # @returns Array<Tile>
  def get_adjacent_tiles(tile)
    positions = tile.get_adjacent_positions
    normalized_tiles.select { |tile| positions.include? tile.position }
  end

  def generate_random_tiles
    self.tiles = self.tiles.presence || ('A'..'Z').to_a.shuffle[0, 16]
  end
end




