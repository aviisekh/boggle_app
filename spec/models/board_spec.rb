require 'rails_helper'

RSpec.describe Board, type: :model do

  let!(:board) { create :board, tiles: ["Z", "U", "B", "C", "I", "O", "G", "E", "V", "L", "R", "Y", "K", "Q", "W", "X"] }
  # Z U B C
  # I O G E
  # V L R Y
  # K Q W X

  describe "associations" do
    it { is_expected.to have_many(:games) }
  end

  describe "#tiles" do
    it "should contains 16 elements for 4x4 board" do
      expect(Board.create!.tiles.length).to eql(16)
    end
  end

  describe "#valid_words" do
    it "should contain the valid word" do
      expect(board.valid_words).to include("GLORY", "GREY");
    end

    it "should not contain the invalid words" do
      expect(board.valid_words).not_to include("APPLE");
    end
  end
end
