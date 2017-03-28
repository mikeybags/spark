require 'fileutils'

class UsersController < ApplicationController
  def show
    user = User.find(params[:id])
    if user
      render json: user
    else
      render json: {errors: user.errors.full_messages}
    end

  end

  def new
    user = User.create(username: params[:username], email: params[:email], password: params[:password], password_confirmation: params[:password_confirmation], birthday: params[:birthday])
    if user.valid?
      render json: {user: user}
    else
      render json: {errors: user.errors.full_messages}
    end
  end

  def traits
    puts "check"
    user = User.update(params[:id], height: params[:height], body_type: params[:body_type], religion: params[:religion])
    if user.valid?
      render json: {user: user}
    else
      render json: {errors: user.errors.full_messages}
    end
  end

  def relationship
    puts params
    if params[:have_children] == 'false'
      @have_children = false
    else
      @have_children = true
    end
    user = User.update(params[:id], relationship_status: params[:relationship_status], have_children: @have_children, want_children: params[:want_children], number_children: params[:number_children])
    if user.valid?
      render json: {user: user}
    else
      render json: {errors: user.errors.full_messages}
    end
  end

  def attributes
    user = User.update(params[:id], ethnicity: params[:ethnicity], smoker: params[:smoker], drinker: params[:drinker], education_level: params[:education_level], salary: params[:salary])
    if user.valid?
      render json: {user: user}
    else
      render json: {errors: user.errors.full_messages}
    end
  end

  def bio
    user = User.update(params[:id], zipcode: params[:zipcode], bio: params[:bio])
    if user.valid?
      render json: {user: user}
    else
      render json: {errors: user.errors.full_messages}
    end
  end

  def image
    puts params
    username = User.find(params[:id])
    file = params[:file]
    @picture_path = "assets/"+username.username.to_s+file.original_filename.to_s
    user = User.update(params[:id], profile_picture: @picture_path)
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

  def getCurrent
    user = User.find(params[:id])
    if user
      render json: user
    else
      render json: {errors: user.errors.full_messages}
    end
  end
end
