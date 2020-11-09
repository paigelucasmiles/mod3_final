class Entry < ApplicationRecord
    has_many :tags
    has_many :topics, through: :tags
end
