class DateIdeaSerializer < ActiveModel::Serializer
  attributes :id, :title, :weather, :time, :cost, :date_num, :copy_one, :copy_two, :link

  has_many :date_tags
  has_many :tags, through: :date_tags
end
