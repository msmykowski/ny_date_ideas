class DateIdeaSerializer < ActiveModel::Serializer
  attributes  :id,
              :copy_two,
              :link,
              :title_in_copy,
              :split_copy_one
end
