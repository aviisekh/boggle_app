require 'rails_helper'

RSpec.describe Board, type: :model do
  describe "Validations" do
    it { is_expected.to validate_presence_of(:tiles) }
  end
end
