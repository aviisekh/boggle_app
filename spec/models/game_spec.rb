require 'rails_helper'

RSpec.describe Game, type: :model do
  let!(:board) { create :board, tiles: ["Z", "U", "B", "C", "I", "O", "G", "E", "V", "L", "R", "Y", "K", "Q", "W", "X"] }
  # Z U B C
  # I O G E
  # V L R Y
  # K Q W X

  let!(:game) { create :game, board: board }

  describe "associations" do
    it { is_expected.to belong_to(:board) }
  end

  describe "#submit_word!" do
    context 'when the submitted word is not valid' do
      it 'should  return false' do
        expect(game.submit_word!('apple')).to be_falsey
      end

      it 'should not add the word to found_words array' do
        found_words_length = game.found_words.length
        game.submit_word!('apple')
        expect(game.found_words.length).to eq(found_words_length)
      end
    end

    context 'when the submitted word is valid' do
      context "when word was not already submitted" do
        it 'should  return true and should add the word to found words' do
          found_words_length = game.found_words.length
          expect(game.submit_word!('glory')).to be_truthy
          expect(game.found_words.length).to eq(found_words_length+1)
        end
        end

      context "when word was already submitted" do
        it 'should  return falsey and should not add the word to found words' do
          game.submit_word!('glory')
          found_words_length = game.found_words.length
          expect(game.submit_word!('glory')).to be_falsey
          expect(game.found_words.length).to eq(found_words_length)
        end
      end
    end
  end

  describe "#valid_word?" do
    context 'when word is valid' do
      context 'when word is a new word' do
        it 'should return the truth' do
          expect(game.valid_word?('glory')).to be_truthy
        end

        context 'when word is already submitted' do
          it 'should return the truth' do
            game.submit_word!('glory')
            expect(game.valid_word?('glory')).to be_falsey
          end
        end
      end
    end

    context 'when word is invalid for the game' do
      it 'should return the false' do
        expect(game.valid_word?('apple')).to be_falsey
      end
    end
  end
end
