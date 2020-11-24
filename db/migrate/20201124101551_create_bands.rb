class CreateBands < ActiveRecord::Migration[6.0]
  def change
    create_table :bands do |t|
      t.string :name
      t.text :description
      t.string :creation_year

      t.timestamps
    end
  end
end
