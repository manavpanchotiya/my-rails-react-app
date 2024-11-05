# frozen_string_literal: true

module Api
  module V1
    # models/organization_setting.rb
    class OrganizationSettingsController < BaseController
      before_action :set_organization_setting, only: %i[show update]
      # before_action :authenticate_user!, except: [:index]
      # GET /organization_settings
      def index
        @organization_settings = OrganizationSetting.all

        render json: @organization_settings
      end

      # POST /organization_settings
      def create
        @organization_setting = OrganizationSetting.create!(organization_setting_params)
        render_message(I18n.t('successfully_created', entity: 'Organization'))
      end

      # PATCH/PUT /organization_settings/1
      def update
        @organization_setting.update!(organization_setting_params)
        render_message(I18n.t('successfully_updated', entity: 'Organization'))
      end

      private

      # Use callbacks to share common setup or constraints between actions.
      def set_organization_setting
        @organization_setting = OrganizationSetting.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def organization_setting_params
        params.require(:organization_setting).permit(:title, metadata: {})
      end
    end
  end
end
