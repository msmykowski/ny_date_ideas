class CreateDateIdeas < ActiveRecord::Migration
  def change
    create_table :date_ideas do |t|
      t.string :title
      t.string :weather
      t.string :time
      t.integer :cost
      t.string :date_num
      t.string :link

      t.timestamps null: false
    end
  end
end
