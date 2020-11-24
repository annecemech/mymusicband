class CreatePartitions < ActiveRecord::Migration[6.0]
  def change
    create_table :partitions do |t|
      t.string :name
      t.integer :instrument
      t.references :user, null: false, foreign_key: true
      t.references :track, null: false, foreign_key: true

      t.timestamps
    end
  end
end
