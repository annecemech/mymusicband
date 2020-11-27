class ChangeStyleToString < ActiveRecord::Migration[6.0]
  def change
    change_column :tracks, :style, :string
  end
end
