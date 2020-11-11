class TagsController < ApplicationController
    def index
        @tags = Tag.all
        render json: @tags, include: [:topic, :entry]
    end

    def create
        @new_tag = Tag.new(tag_params)
        if @new_tag.valid?
            @new_tag.save
            render json: @new_tag, status: :created
        else
            render json: { errors: @new_tag.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def tag_params
        params.require(:tag).permit(:name, :entry_id, :topic_id)
    end
end
