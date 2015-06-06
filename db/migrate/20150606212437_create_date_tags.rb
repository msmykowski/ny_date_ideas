class CreateDateTags < ActiveRecord::Migration
  def change
    create_table :date_tags do |t|
      t.integer :tag_id
      t.integer :date_idea_id
      t.timestamps null: false
    end
  end
end
