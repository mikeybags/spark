class Interest < ApplicationRecord
  has_many :user_interests
  has_many :users, class_name: "User", through: 'user_interests'
end
