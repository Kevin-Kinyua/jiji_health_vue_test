# class Api::Auth::RegistrationsController < ApplicationController
# end

module Api
  module Auth
    class Api::Auth::RegistrationsController < Devise::RegistrationsController
      respond_to :json

      private

      def respond_with(resource, _opts = {})
        if resource.persisted?
          render json: { message: 'User registered successfully.', user: resource }, status: :created
        else
          render json: { errors: resource.errors.full_messages }, status: :unprocessable_entity
        end
      end
    end
  end
end
