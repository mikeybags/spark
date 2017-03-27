class Match < ApplicationRecord
  belongs_to :requester, class_name: "User"
  belongs_to :acceptor, class_name: "User"
end
