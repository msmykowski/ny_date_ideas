class AddCopyToDateIdeas < ActiveRecord::Migration
  def change
    add_column :date_ideas, :copy_one, :string
    add_column :date_ideas, :copy_two, :string
  end
end
