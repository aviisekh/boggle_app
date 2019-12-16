class GamesController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_game_from_token, only: [:show, :submit_word]

  def create
    board = Board.create!
    @game = Game.create(board: board)
    respond_to do |format|
      format.json { render json: @game, status: :ok }
    end
  end

  def show
    respond_to do |format|
      format.json { render json: @game, status: :ok }
    end
  end

  def submit_word
    if @game.submit_word!(params[:word])
      respond_to do |format|
        format.json { render json: @game, status: :ok }
      end
    else
      respond_to do |format|
        format.json { render json: @game, status: :unprocessable_entity }
      end
    end
  end

  private

  def set_game_from_token
    @game = Game.find(token: params[:token_id])
  end
end
