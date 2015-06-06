class DateTag < ActiveRecord::Base
  belongs_to :date_idea
  belongs_to :tag
end
