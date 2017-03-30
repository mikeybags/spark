class MatchesController < ApplicationController

  def show
    matched_users = []
    user = User.find(params[:id])
    user.accepted_sent_users.each do |request|
      matched_users.push(request)
    end
    user.accepted_received_users.each do |received|
      matched_users.push(received)
    end
    puts matched_users
    render json: {matches: matched_users}
  end
end
