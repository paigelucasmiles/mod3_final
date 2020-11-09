class EntriesController < ApplicationController
    def index
        @entries = Entry.all
        render json: @entries, include: [:tags, :topics]
    end

    def create
        @entry = Entry.new(entry_params)
        if @entry.valid?
            @entry.save
            render json: @entry, status: :created
        else
            render json: { errors: @entry.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def entry_params
        params.require(:entry).permit(:name, :url, :kind)
    end
end
