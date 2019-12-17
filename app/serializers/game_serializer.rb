class GameSerializer < ActiveModel::Serializer
  attributes :id, :found_words, :remaining_time

  def id
    object.token
  end
end
