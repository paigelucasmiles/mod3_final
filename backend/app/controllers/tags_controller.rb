class TagsController < ApplicationController
    def index
        @tags = Tag.all
        render json: @tags, include: [:topic, :entry]
    end

    # def create
    #     @new_tag = Tag.create(
    #         name: params[:name],
    #         entry: params[:entry_id],
    #         topic: params[:topic_id]
    #     )
    # end
end
