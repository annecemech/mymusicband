class RemoveInstrumentFromPartitions < ActiveRecord::Migration[6.0]
  def change
    remove_column :partitions, :instrument, :integer
  end
end
