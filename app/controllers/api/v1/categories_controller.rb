# frozen_string_literal: true

module Api
  module V1
    class CategoriesController < Api::V1::BaseController
      before_action :authenticate_user!
      before_action :set_category, only: %i[show update]
      before_action :load_data, only: :bulk_destroy

      before_action :authorize!

      # GET /categories
      def index
        @categories = Category.all
        render_json(categories: @categories, permissions: permissions(Category))
      end

      # GET /categories/1
      def show
        render json: @category
      end

      # POST /categories
      def create
        @category = Category.new(category_params)
        Category.create!(category_params)
        render_message(I18n.t('successfully_created', entity: 'Category'))
      end

      # PATCH/PUT /categories/1
      def update
        @category.update!(category_params)
        render_message(I18n.t('successfully_updated', entity: 'Category'))
      end

      def bulk_destroy
        records_size = @categories.size
        if @categories.destroy_all
          render_message(I18n.t('successfully_deleted', count: records_size,
                                                        entity: records_size > 1 ? 'Categories' : 'Category'))
        else
          render_error(I18n.t(:something_went_wrong))
        end
      end

      def authorize!
        authorize Category
      end

      private

      # Use callbacks to share common setup or constraints between actions.
      def set_category
        @category = Category.find(params[:id])
      end

      def load_data
        @categories = Category.where(id: params[:ids])
      end

      # Only allow a list of trusted parameters through.
      def category_params
        params.require(:category).permit(:name)
      end
    end
  end
end
