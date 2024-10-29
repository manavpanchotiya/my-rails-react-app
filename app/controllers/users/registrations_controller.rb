# frozen_string_literal: true

module Users
  class RegistrationsController < Devise::RegistrationsController
    respond_to :json

    # This method will handle user email updates
    def update
      @user = current_user

      # Check if user is logged in
      if @user.nil?
        render json: { error: 'User not authenticated' }, status: :unauthorized
        return
      end

      # Validate current password
      unless @user.valid_password?(account_update_params[:current_password])
        render json: { success: false, errors: ['Current password is incorrect.'] }, status: :unprocessable_entity
        return
      end

      # Validate new email
      new_email = account_update_params[:email]
      if new_email.present?
        # Check if the email is already taken by another user
        if User.exists?(email: new_email) && new_email != @user.email
          render json: { success: false, errors: ['Email has already been taken.'] }, status: :unprocessable_entity
          return
        end

        # Assign new email
        @user.email = new_email
      end

      # Attempt to save the user with the new email
      if @user.save
        render json: {
          notice: 'Email updated successfully',
          success: true,
          data: @user
        }, status: :ok
      else
        render json: {
          success: false,
          errors: @user.errors.full_messages.to_sentence
        }, status: :unprocessable_entity
      end
    end

    def change_password
      current_password = account_update_params[:current_password]
      new_password = account_update_params[:password]
      new_password_confirmation = account_update_params[:password_confirmation]
      self.resource = resource_class.to_adapter.get!(send(:"current_#{resource_name}").to_key)

      unless resource.valid_password?(current_password)
        render json: { errors: 'Current password is incorrect' }, status: :unauthorized
        return
      end

      if new_password.blank? || new_password_confirmation.blank?
        render json: { errors: 'New password and confirmation cannot be blank.' }, status: :unprocessable_entity
        return
      end

      if new_password != new_password_confirmation
        render json: { errors: 'New password and confirmation do not match.' }, status: :unprocessable_entity
        return
      end

      # Check if the new password is the same as the current password
      if resource.valid_password?(new_password)
        render json: { errors: 'New password cannot be the same as the current password.' },
               status: :unprocessable_entity
        return
      end

      # Update user password
      if resource.update(password: new_password, password_confirmation: new_password_confirmation)
        render json: { notice: 'Password changed successfully', success: true }, status: :ok
      else
        render json: {
          success: false,
          errors: @user.errors.full_messages.to_sentence
        }, status: :unprocessable_entity
      end
    end

    # DELETE /resource
    def destroy
      resource.destroy
      Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name)
      set_flash_message! :notice, :destroyed
      yield resource if block_given?
      render json: {
        notice: 'Thanks, We will meet again!',
        success: true
      }, status: :created
    end

    private

    def respond_with(resource, _opts = {})
      if resource.persisted?
        render json: {
          message: 'Signed up successfully.',
          success: true,
          data: resource,
          isLoggedIn: resource.persisted?
        }, status: :created
      else
        render json: {
          success: false,
          errors: resource.errors.full_messages.to_sentence
        }, status: :unprocessable_entity
      end
    end

    def respond_to_on_destroy
      head :no_content
    end

    # Strong parameters for account updates
    def account_update_params
      params.require(:user).permit(:email, :current_password, :password, :password_confirmation)
    end
  end
end
