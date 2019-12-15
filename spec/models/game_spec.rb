require 'rails_helper'

RSpec.describe Game, type: :model do
  describe "Associations" do
    it { is_expected.to belong_to(:board) }
  end
end
