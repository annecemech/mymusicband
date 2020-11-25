class AddInstrumentIdToUsers < ActiveRecord::Migration[6.0]
  def change
    add_reference :users, :instrument, foreign_key: true
  end
end
