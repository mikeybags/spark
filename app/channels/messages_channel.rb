class MessagesChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'messages'
  end
  def receive(payload)
    puts payload["chatroom_id"]
    puts payload["message"]
    puts current_user
    message = Message.create(receiver: User.find(payload["chatroom_id"]), message: payload["message"], sender: User.find(current_user))
    ActionCable.server.broadcast('messages', {content: message.message, chatroom_id: message.receiver_id, sender_id: message.sender_id, sender: current_user})
  end
end
