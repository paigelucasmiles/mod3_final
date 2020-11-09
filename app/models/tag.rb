class Tag < ApplicationRecord
  belongs_to :entry
  belongs_to :topic
end
