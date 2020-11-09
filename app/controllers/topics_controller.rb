class TopicsController < ApplicationController
    def index
        @topics = Topic.all
        render json: @topics, include: [:entries, :tags]
    end
end
