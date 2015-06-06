namespace :csv do
  desc "CSV_import"
  task :import => :environment do
    CSV_importer.import(date_idea_file: 'tmp/date_ideas.csv')
  end
end
