class Users::ProfileController < ApplicationController
  before_action :authenticate_user!

  def show
    render json: { user: current_user }
  end
end
