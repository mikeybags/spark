class MessagesController < ApplicationController
  def show
    @message = Message.all
  end
end
