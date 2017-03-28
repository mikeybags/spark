class UsersController < ApplicationController
  def show
  end

  def new
  end

  def edit
  end

  def updatePersonality
    user = User.find(params[:user])
    user.personality = params[:personality]
    if (user.preference)
      preference = user.preference
    else
      preference = Preference.new(user:user)
    end
    preference.personalities = Preference.addPersonalityPreferences(user.personality)
    user.save
    preference.save
    render json: user
  end
end
