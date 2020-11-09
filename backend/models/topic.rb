class Topic < ApplicationRecord
    has_many :tags
    has_many :entries, through: :tags
end
