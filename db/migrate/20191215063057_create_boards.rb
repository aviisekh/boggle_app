class CreateBoards < ActiveRecord::Migration[6.0]
  def change
    create_table :boards do |t|
      t.string :tiles, null: false, default: [].to_yaml, array: true

      t.timestamps
    end
  end
end
