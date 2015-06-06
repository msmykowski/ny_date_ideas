class DateIdea < ActiveRecord::Base
  has_many :date_tags
  has_many :tags, through: :date_tags
end
