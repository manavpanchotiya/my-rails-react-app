# frozen_string_literal: true

module Api
  module V1
    class UserRolesController < ApplicationController
      before_action :set_user_role, only: %i[show destroy]

      # GET /api/v1/user_roles
      def index
        @user_roles = UserRole.all
        render json: @user_roles
      end

      # GET /api/v1/user_roles/:id
      def show
        render json: @user_role
      end

      # POST /api/v1/user_roles
      def create
        @user_role = UserRole.new(user_role_params)
        if @user_role.save
          render json: @user_role, status: :created
        else
          render json: @user_role.errors, status: :unprocessable_entity
        end
      end

      # DELETE /api/v1/user_roles/:id
      def destroy
        @user_role.destroy
        head :no_content
      end

      private

      def set_user_role
        @user_role = UserRole.find(params[:id])
      end

      def user_role_params
        params.require(:user_role).permit(:user_id, :role_id)
      end
    end
  end
end
