class PagesController < ApplicationController
  def index
    if cookies.signed[:user_id]
      if session[:message_id]
        @messages = Message.where("(sender_id = #{cookies.signed[:user_id]} or sender_id = #{session[:message_id]}) and (receiver_id = #{session[:message_id]} or receiver_id = #{cookies.signed[:user_id]})")
      end
    end
  end
end
