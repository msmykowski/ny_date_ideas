class DateIdea < ActiveRecord::Base
  has_many :date_tags
  has_many :tags, through: :date_tags

  def title_in_copy
    title_in_copy = match_substring_in_string(title, copy_one)
    title_in_copy
  end

  def split_copy_one
    index_one = copy_one.downcase.index(title_in_copy.downcase)
    index_two = index_one + title_in_copy.length

    {
      half_one: copy_one[0...index_one],
      half_two: copy_one[index_two..-1]
    }
  end

  private

  def match_substring_in_string(substring, string)
    substring = adjust_title(substring)
    if string.downcase.include?(substring.downcase)
      substring
    else
      match_substring_in_string(substring[0...-1], string)
    end
  end

  def adjust_title(substring)
    if substring.include? '@'
      substring.gsub(/@/, 'at')
    else
      substring
    end
  end

end
