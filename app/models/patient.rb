class Patient < ApplicationRecord
  belongs_to :user

  validates :name, :email, :phone, :date_of_birth, presence: true
  validates :email, uniqueness: true
end
