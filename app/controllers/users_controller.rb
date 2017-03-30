require 'fileutils'

class UsersController < ApplicationController
  def show
    puts params[:id]
    puts cookies.signed[:user_id]
    user = User.find(params[:id])
    preferences = Preference.find_by_user_id(params[:id])
    if user.id != cookies.signed[:user_id]
      user.profile_viewed += 1
      user.save
    end
    if user && preferences
      render json: {user: user, preferences: preferences}
    else
      render json: {errors: user.errors.full_messages}
    end

  end

  def new
    puts params[:zipcode].length
    user = User.create(username: params[:username], email: params[:email], password: params[:password], password_confirmation: params[:password_confirmation], birthday: params[:birthday], zipcode: params[:zipcode])
    if user.valid?
      Preference.create(user:user)
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
    user = User.update(params[:id], bio: params[:bio])
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

  def discover
    current_user = User.includes(:preference).find(params[:id])
    pref = current_user.preference
    maximum_date = Time.now - (31536000 * pref.minimum_age)
    minimum_date = Time.now - (31536000 * pref.maximum_age)
    users = User.includes(:preference).where("gender = ? AND city = ? AND state = ?", pref.gender, current_user.city, current_user.state).where(:birthday => minimum_date.beginning_of_day..maximum_date.end_of_day).limit(8).offset(params[:start].to_i)
    if current_user.want_children = "yes"
      users = users.where(:want_children => ["yes", "maybe"])
    elsif current_user.want_children = "no"
      users = users.where(:want_children => ["no", "maybe"])
    end
    if pref.has_children = "no"
      users = users.where(have_children:false)
    end
    users = compatability_test(current_user, users, pref)
    render json: users
  end

  def createMatch
    user = User.find(params[:id])
    already_exists = Match.where("(requester_id = #{params[:id]} AND acceptor_id = #{params[:receiver]}) OR (requester_id = #{params[:receiver]} AND acceptor_id = #{params[:id]})")
    if already_exists.length > 0
      puts already_exists.inspect
      match = already_exists[0]
      if match.accepted == false
        match.accepted = true
        if match.rejected = true
          match.rejected = false
        end
        match.save
        render json: {"saved" => true}
      else
        render json: {"error" => "Match already exists"}
      end
    else
      match = Match.create(requester:user, acceptor:User.find(params[:receiver]))
      render json: match
    end
  end

  def getSentMatches
    requests = Match.where("requester_id = ?", params[:id])
    matches = Match.where("acceptor_id = ? AND accepted = true", params[:id])
    dont_show = {}
    requests.each do |request|
      dont_show[request.acceptor_id.to_s] = true
    end
    matches.each do |match|
      dont_show[match.requester_id.to_s] = true
    end
    render json: dont_show
  end

  def getMatches
    user = User.find(params[:id])
    matches = user.sent_requests_accepted + user.received_requests_accepted
    user_matches = user.accepted_sent_users + user.accepted_received_users
    render json: {"matches": matches, "user_matches": user_matches}
  end

  def getPendingMatches
    user = User.includes(:preference).find(params[:id])
    pref = user.preference
    matches = user.pending_received_users.includes(:preference).where("rejected = false")
    matches = compatability_test(user, matches, pref)
    render json: matches
  end

  def compatability_test(current_user, users, pref)
    users.each do |person|
      matched_on = []
      person.compatability = 0
        if person.preference.gender != current_user.gender
          person.compatability -= 1000
        end
      if pref.body_type == nil
        person.compatability += 3
        matched_on << "body_type"
      elsif pref.body_type.include?(person.body_type)
        person.compatability += 5
        matched_on << "body_type"
      end
      if pref.relationship_status == nil
        person.compatability += 3
        matched_on << "relationship_status"
      elsif pref.relationship_status.include?(person.relationship_status)
        person.compatability += 5
        matched_on << "relationship_status"
      end
      if pref.smokes == nil
        person.compatability += 3
        matched_on << "smokes"
      elsif pref.smokes.include?(person.smoker)
        person.compatability += 5
        matched_on << "smokes"
      end
      if pref.drinks == nil
        person.compatability += 3
        matched_on << "drinks"
      elsif pref.drinks.include?(person.drinker)
        person.compatability += 5
        matched_on << "drinks"
      end
      if pref.religion == nil
        person.compatability += 3
        matched_on << "religion"
      elsif pref.religion.include?(person.religion)
        person.compatability += 5
        matched_on << "religion"
      end
      if pref.education == nil
        person.compatability += 3
        matched_on << "education"
      elsif pref.education.include?(person.education_level)
        person.compatability += 5
        matched_on << "education"
      end
      if pref.salary == nil
        person.compatability += 3
        matched_on << "salary"
      elsif pref.salary.include?(person.salary)
        person.compatability += 5
        matched_on << "salary"
      end
      if pref.ethnicity == nil
        person.compatability += 3
        matched_on << "ethnicity"
      else
        ethnicities = pref.ethnicity & person.ethnicity.split(",")
        if ethnicities.length > 0 || pref.ethnicity == nil
          person.compatability += 5
          matched_on << "ethnicity"
        end
      end
      if pref.minimum_height == nil && (pref.maximum_height == nil || person.height < pref.maximum_height)
        person.compatability += 5
        matched_on << "height"
      elsif pref.maximum_height == nil && person.height > pref.minimum_height
        person.compatability += 5
        matched_on << "height"
      elsif person.height.between?(pref.minimum_height,pref.maximum_height)
        person.compatability += 5
        matched_on << "height"
      end
      if pref.personalities.split(",").include?(person.personality)
        person.compatability += 45
      end
      if matched_on.include?(pref.most_important)
        person.compatability += 15
      end
      unless matched_on.include?(pref.dealbreaker)
        person.compatability -= 30
      end
    end
    return users
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
      cookies.signed[:user_id] = user.id
      session[:id] = user.id
      render json: {user: user}
    else
      render json: {errors: 'Combination does not exist'}
    end
  end

  def createReject
    match = Match.where("acceptor_id = #{params[:id]} AND requester_id = #{params[:requester]}")
    match = match[0]
    match.rejected = true
    match.save
    render json: match
  end

  def getRejectedMatches
    user = User.includes(:preference).find(params[:id])
    pref = user.preference
    matches = user.pending_received_users.includes(:preference).where("rejected = true")
    matches = compatability_test(user, matches, pref)
    render json: matches
  end

  def messaging
    puts params[:id]
    session[:message_id] = params[:id]
    redirect_to '/'
  end

  def getCurrent
    user = User.find(params[:id])
    if user
      render json: user
    else
      render json: {errors: user.errors.full_messages}
    end
  end

  def preferences
    user_prefs = Preference.find_by_user_id(params[:user_id])
    user_prefs.update(gender: params[:gender], minimum_age: params[:minimum_age], maximum_age: params[:maximum_age], body_type: params[:body_type], relationship_status: params[:relationship_status], has_children: params[:has_children], smokes: params[:smokes], drinks: params[:drinks], ethnicity: params[:ethnicity], religion: params[:religion], education: params[:education], minimum_height: params[:minimum_height], maximum_height: params[:maximum_height], salary: params[:salary], dealbreaker: params[:dealbreaker], most_important: params[:most_important])
    user_prefs.save
    if user_prefs.valid?
      render json: {preferences: user_prefs}
    else
      render json: {errors: user.errors.full_messages}
    end
  end
  private
    def user_params
      params.require(:user).permit(:profile_picture)
    end
end
