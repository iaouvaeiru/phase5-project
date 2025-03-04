class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.belongs_to :item, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true
      t.integer :bid
      t.string :accepted

      t.timestamps
    end
  end
end
