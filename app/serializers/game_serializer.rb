class GameSerializer < ActiveModel::Serializer
  attributes :id, :found_words, :remaining_time, :tiles, :score

  def id
    object.token
  end

  def score
    {each_score: object.found_words.map{|x| {word: x, score: x.length}}, all_score: object.score}
  end

  def tiles
    object.board.tiles.each_slice(4).to_a
  end
end
