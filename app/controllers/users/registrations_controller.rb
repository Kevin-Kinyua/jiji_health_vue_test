# class Users::RegistrationsController < Devise::RegistrationsController
#   respond_to :json

#   private

#   def respond_with(resource, _opts = {})
#     if resource.persisted?
#       render json: { message: 'User registered successfully.', user: resource }, status: :ok
#     else
#       render json: { errors: resource.errors.full_messages }, status: :unprocessable_entity
#     end
#   end
# end


class Users::RegistrationsController < Devise::RegistrationsController
  respond_to :json

  private

  def respond_with(resource, _opts = {})
    if resource.persisted?
      render json: { user: resource, token: request.env['warden-jwt_auth.token'] }, status: :ok
    else
      render json: { errors: resource.errors.full_messages }, status: :unprocessable_entity
    end
  end
end
