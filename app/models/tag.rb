class Tag < ActiveRecord::Base
  has_many :date_tags
  has_many :date_ideas, through: :date_tags
end
