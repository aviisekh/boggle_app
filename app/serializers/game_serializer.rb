class GameSerializer < ActiveModel::Serializer
  attributes :id, :found_words, :remaining_time, :tiles

  def id
    object.token
  end

  def tiles
    object.board.tiles.each_slice(4).to_a
  end
end
