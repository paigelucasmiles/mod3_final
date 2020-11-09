class TagsController < ApplicationController
    def index
        @tags = Tag.all
        render json: @tags, include: [:topic, :entry]
    end
end
