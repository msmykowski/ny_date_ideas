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
        date_num:row[8],
        link:row[10]
      }

      DateIdea.create(date_attributes)
    end
  end

end
