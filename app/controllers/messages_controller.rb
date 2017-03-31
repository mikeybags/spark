class MessagesController < ApplicationController
  def show
    @user = User.find(params[:id])
    @user_messages = Message.where("(sender_id = #{cookies.signed[:user_id]} or sender_id = #{params[:id]}) and (receiver_id = #{params[:id]} or receiver_id = #{cookies.signed[:user_id]})")
    puts @user_messages
    render json: {message: @user_messages, user: @user}
  end

  def create
    message = Message.create(message: params[:content], receiver: User.find(params[:receiver_id]), sender: User.find(cookies.signed[:user_id]))
    render json: {id: params[:receiver_id]}
  end
end
