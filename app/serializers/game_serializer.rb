class GameSerializer < ActiveModel::Serializer
  attributes :id, :found_words

  def id
    object.token
  end
end
