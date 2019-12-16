class GamesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    board = Board.create!
    @game = Game.create(board: board)
    respond_to do |format|
      format.json { render json: @game.as_json, status: :ok }
    end
  end

  def show
    @game = Game.find_by_token(params[:token_id])
    respond_to do |format|
      format.json { render json: @game.as_json }
    end
  end
end
