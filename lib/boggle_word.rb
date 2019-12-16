class BoggleWord
  def initialize(raw_string)
    @raw_string = raw_string.upcase.strip
  end

  def to_s
    @raw_string
  end

  def length
    @raw_string.length
  end

  def first_letter
    @raw_string[0]
  end

  def second_letter_onwards
    self.class.new(@raw_string[1..-1])
  end
end
