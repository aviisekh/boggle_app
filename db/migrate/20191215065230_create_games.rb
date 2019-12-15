class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :token, null: false
      t.text :found_words, default: [].to_yaml, array: true
      t.references :board, null: false, foreign_key: true

      t.timestamps
    end
  end
end
