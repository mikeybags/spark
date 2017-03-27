class User < ApplicationRecord
  has_secure_password
   EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
   validates :email, presence: true, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX }
   has_many :user_interests
   has_many :interests, class_name: "Interest", through: 'user_interests'
   has_many :pictures
   has_one :preference
   has_many :matches
   has_many :messages
   has_many :favorites
end
