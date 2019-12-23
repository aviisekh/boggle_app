class DashboardController < ApplicationController
  def index
    @high_scores =  Game.highscores
  end
end
