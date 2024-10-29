# frozen_string_literal: true

module Api
  module V1
    class ProfilesController < BaseController
      before_action :authenticate_user!
      before_action :set_profile, only: %i[index create upload_image]

      def index
        render_json(
          profile: @profile.as_json.merge(image_url: @profile.image_url),
          genders: Profile.genders
        )
      end

      def create
        if @profile.persisted?
          @profile.update!(profile_params)
          render_message(I18n.t('successfully_updated', entity: 'Profile'))
        else
          @profile = current_user.create_profile!(profile_params)
          render_message(I18n.t('successfully_created', entity: 'Profile'))
        end
      end

      # New action for uploading the profile image
      def upload_image
        @profile.image.attach(params[:image])
        if @profile.save!
          render_message(I18n.t('successfully_updated', entity: 'Profile Image'))
        else
          render_error(@profile.errors.full_messages.join(', '), :unprocessable_entity)
        end
      end

      private

      def set_profile
        @profile = current_user.profile || current_user.build_profile
      end

      def profile_params
        params.require(:profile).permit(:first_name, :middle_name, :last_name, :bio, :gender)
      end
    end
  end
end
