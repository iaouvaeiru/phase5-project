class CreateReports < ActiveRecord::Migration[6.1]
  def change
    create_table :reports do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :order, null: false, foreign_key: true
      t.boolean :reported, default: false
      t.string :reason

      t.timestamps
    end
  end
end
