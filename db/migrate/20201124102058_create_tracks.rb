class CreateTracks < ActiveRecord::Migration[6.0]
  def change
    create_table :tracks do |t|
      t.string :title
      t.string :artist
      t.integer :style
      t.integer :duration
      t.integer :tempo
      t.integer :pattern
      t.references :band, null: false, foreign_key: true

      t.timestamps
    end
  end
end
