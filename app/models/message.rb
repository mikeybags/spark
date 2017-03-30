class Message < ApplicationRecord
  belongs_to :sender, class_name: "User"
  belongs_to :receiver, class_name: "User"
  after_create_commit {MessageBroadcastJob.perform_now self}
end
