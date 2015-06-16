namespace :csv do
  desc "CSV_import"
  task :import => :environment do
    CSV_importer.import(date_idea_file: 'app/assets/csv_files/date_ideas.csv')
  end
end
