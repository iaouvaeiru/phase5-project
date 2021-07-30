class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :price
      t.string :name
      t.string :image
      t.string :description
      t.boolean :sold, default: false
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
