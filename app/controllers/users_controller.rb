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
    user = User.update(params[:id], height: params[:height], body_type: params[:body_type], religion: params[:religion], gender: params[:gender])
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
      puts 'working'
      render json: {user: user}
    else
      puts 'not working'
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
    location = ZipCodes.identify(params[:zipcode].to_s)
    user = User.update(params[:id], zipcode: params[:zipcode], bio: params[:bio], city: location[:city], state: location[:state_name])
    if user.valid?
      render json: {user: user}
    else
      render json: {errors: user.errors.full_messages}
    end
  end

  def image
    user = User.find(params[:id])
    user.update(user_params)
    render json: {user: user}
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

  def login
    puts 'working'
    user = User.find_by_username(params[:username]).try(:authenticate, params[:password])
    if user
      render json: {user: user}
    else
      render json: {errors: 'user does not exist'}
    end
  end

  def getCurrent
    user = User.find(params[:id])
    if user
      render json: user
    else
      render json: {errors: user.errors.full_messages}
    end
  end
  private
  def user_params
    params.require(:user).permit(:profile_picture)
  end
end
