require 'csv'

class CSV_importer

  def self.import(date_idea_file: date_idea_file)
    create_date_ideas(date_idea_file)
  end

  def self.create_date_ideas(file)
    CSV.foreach(file, :headers => true) do |row|
      row[4] == "free" ? cost = 0 : cost = row[4].length

      date_attributes = {
        title:row[0],
        weather:row[2],
        time:row[3],
        cost:cost,
        copy_one:row[6],
        copy_two:row[7],
        date_num:row[8],
        link:row[10]
      }

      new_date_idea = DateIdea.create(date_attributes)
      tag = create_tag(row[1])
      create_relationship(new_date_idea, tag)
    end
  end

  def self.create_tag(row_item)
    tag_name = row_item.downcase
    Tag.find_by(name: tag_name)? Tag.find_by(name: tag_name) : Tag.create(name: tag_name)
  end

  def self.create_relationship(date_idea, tag)
    DateTag.create(date_idea_id: date_idea.id, tag_id: tag.id)
  end

end
