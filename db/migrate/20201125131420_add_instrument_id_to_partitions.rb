class AddInstrumentIdToPartitions < ActiveRecord::Migration[6.0]
  def change
    add_reference :partitions, :instrument, foreign_key: true
  end
end
