# frozen_string_literal: true

module Api
  module V1
    # api/v1/permission_controller.rb
    class PermissionsController < BaseController
      before_action :set_permission, only: %i[show update destroy]

      # GET /api/v1/permissions
      def index
        permissions = Permission.all
        render_json(permissions:)
      end

      # GET /api/v1/permissions/:id
      def show
        render json: @permission
      end

      # POST /api/v1/permissions
      def create
        Permission.create!(permission_params)
        render_message(I18n.t('successfully_created', entity: 'Permission'))
      end

      # PATCH/PUT /api/v1/permissions/:id
      def update
        @permission.update!(permission_params)
        render_message(I18n.t('successfully_updated', entity: 'Permission'))
      end

      # DELETE /api/v1/permissions/:id
      def destroy
        @permission.destroy
        render_message(I18n.t('successfully_deleted', entity: 'Permission'))
      end

      private

      def set_permission
        @permission = Permission.find(params[:id])
      end

      def permission_params
        params.require(:permission).permit(:resource, :action)
      end
    end
  end
end
