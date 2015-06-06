class DateIdeaSerializer < ActiveModel::Serializer
  attributes :id, :title, :weather, :time, :cost, :date_num, :link

  has_many :date_tags
  has_many :tags, through: :date_tags
end
