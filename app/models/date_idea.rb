class DateIdea < ActiveRecord::Base
  has_many :date_tags
  has_many :tags, through: :date_tags

  def title_in_copy
    match_substring_in_string(title, copy_one)
  end

  def split_copy_one
    index_one = copy_one.index(title_in_copy)
    index_two = copy_one.index(title_in_copy) + title_in_copy.length

    {
      half_one: copy_one[0...index_one],
      half_two: copy_one[index_two..-1]
    }
  end

  def copy_one_b
    index_one = copy_one.index(title_in_copy)
    index_two = copy_one.index(title_in_copy).title_in_copy.length
    copy_one[index_two...-1]
  end

  private

  def match_substring_in_string(substring, string)
    if string.include? substring
      substring
    else
      match_substring_in_string(substring[0...-1], string)
    end
  end



end
