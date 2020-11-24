class CreateRecordings < ActiveRecord::Migration[6.0]
  def change
    create_table :recordings do |t|
      t.string :name
      t.boolean :is_lead
      t.references :user, null: false, foreign_key: true
      t.references :partition, null: false, foreign_key: true

      t.timestamps
    end
  end
end
