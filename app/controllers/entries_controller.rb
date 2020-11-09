class EntriesController < ApplicationController
    def index
        @entries = Entry.all
        render json: @entries, include: [:tags, :topics]
    end
end
