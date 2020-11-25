class RemoveInstrumentFromUsers < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :instrument, :integer
  end
end
