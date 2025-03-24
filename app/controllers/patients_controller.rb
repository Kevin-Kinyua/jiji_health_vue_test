class PatientsController < ApplicationController
  before_action :authenticate_user!

  # Get all patients for the logged-in user
  def index
    @patients = current_user.patients
    render json: @patients
  end

  # Create a new patient
  def create
    @patient = current_user.patients.build(patient_params)

    if @patient.save
      render json: @patient, status: :created
    else
      render json: @patient.errors, status: :unprocessable_entity
    end
  end

  private

  def patient_params
    params.require(:patient).permit(:name, :email, :phone, :date_of_birth)
  end
end
