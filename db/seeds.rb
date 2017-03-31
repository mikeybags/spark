# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
interests = Interest.create([{interest: 'Books'}, {interest: 'Camping'},{interest: 'Coffee and conversation'},{interest: 'Business'},{interest: 'Cooking'},{interest: 'Dining out'},{interest: 'Fishing/hunting'},{interest: 'Gardening'},{interest: 'Hobbies and crafts'},{interest: 'Movies'},{interest: 'Museums and art'},{interest: 'Music'},{interest: 'Exploring'},{interest: 'Nightclubs and dancing'},{interest: 'Performing arts'},{interest: 'Playing cards/board games'},{interest: 'Playing sports'},{interest: 'Political events'},{interest: 'Peligion/spirituality'},{interest: 'Shopping/antiques'},{interest: 'Travel'},{interest: 'Video games'},{interest: 'Volunteering'},{interest: 'Watching sports'},{interest: 'Wine tasting'}])

boy1 = User.create({email:'mick@email.com', username:"MasterMick", gender: "Male", password:"password", password_confirmation: "password", birthday: 19930324, height: 70, body_type: "No answer", relationship_status: "Widow/Widower", have_children: false, number_children: 0, want_children: "Maybe", education_level: "Bachelors degree", smoker: "No way", drinker: "Regularly", ethnicity: "White/Caucasian", religion:"Atheist", salary:"Less than $25,000", bio:"HEY! I'm JUST TRYING TO HAVE SUM FUN ;)",  zipcode: 60640, personality: "ENFJ", admin_level:1})

boy2 = User.create({email:'curtis@email.com', username:"CurtThaDurt", gender: "Male", password:"password", password_confirmation: "password", birthday: 19920119, height: 68, body_type: "Athletic and toned", relationship_status: "Divorced", have_children: true, number_children: 3, want_children: "Maybe", education_level: "High school", smoker: "Cigar aficionado", drinker: "Never", ethnicity: "Black/African Descent, Asian,", religion:"Jewish", salary:"$50,001 to $75,000", bio:"HEY! I'm JUST TRYING TO FIND LOVE", zipcode: 60606, personality: "INTP", admin_level:1})

boy3 = User.create({email:'mike@email.com', username:"MikeDrop", gender: "Male", password:"password", password_confirmation: "password", birthday: 19880629, height: 70, body_type: "Heavyset", relationship_status: "Never married", have_children: false, number_children: 0, want_children: "Yes", education_level: "Associates degree", smoker: "No answer", drinker: "Moderately", ethnicity: "Asian, White/Caucasian,", religion:"Muslim", salary:"Less than $25,000", bio:"HEY! CALL ME", zipcode: 60614, personality: "ISTJ", admin_level:1})

girl1 = User.create({email:'laura@email.com', username:"LaurOfTheRings", gender: "Female", password:"password", password_confirmation: "password", birthday: 19900627, height: 65, body_type: "Slender", relationship_status: "Currently separated", have_children: false, number_children: 0, want_children: "Yes", education_level: "PhD / Post Doctoral", smoker: "Daily", drinker: "Regularly", ethnicity: "White/Caucasian,", religion:"Other", salary:"$35,001 to $50,000", bio:"I'm looking for someone to sweep me off my feet", zipcode: 60640, personality: "ESTP", admin_level:0})

girl2 = User.create({email:'cheryl@email.com', username:"KeepItCheryeal", gender: "Female", password:"password", password_confirmation: "password", birthday: 19940103, height: 60, body_type: "No answer", relationship_status: "Divorced", have_children: false, number_children: 0, want_children: "Yes", education_level: "Graduate degree", smoker: "Occasionally", drinker: "Social drinker", ethnicity: "Latino,", religion:"Jewish", salary:"$100,001 to $150,000", bio:"Must love dogs", zipcode: 60618, personality: "ENTP",admin_level:0})

girl3 = User.create({email:'vanessa@email.com', username:"VWVan", gender: "Female", password:"password", password_confirmation: "password", birthday: 19800927, height: 61, body_type: "Athletic and toned", relationship_status: "Never married", have_children: true, number_children: 2, want_children: "No", education_level: "No answer", smoker: "No way", drinker: "Never", ethnicity: "Asian, Other,", religion:"Atheist", salary:"$75,001 to $100,000", bio:"Must hate cats", zipcode: 60615, personality: "INFJ", admin_level:0})

 preference1 = Preference.create([{user:User.find(1), gender: "Female", minimum_age:22, maximum_age:30, body_type:["Slender", "Athletic and toned" , "Stocky"], relationship_status:["Never married" ,"Widow/Widower"], salary: nil,  has_children:"No", smokes: ["No way","Occasionally","Cigar aficionado"], drinks: ["Social drinker","Regularly","Moderately"], ethnicity: ["White/Caucasian","Black/African Descent","Asian"], maximum_height: 70, minimum_height:55, religion: ["Atheist","Jewish","Other"], education:["Bachelors degree","Graduate degree","PhD / Post Doctoral"], dealbreaker: "smokes", most_important: "drinks", personalities: "INFP,ENFP,INFJ,ENFJ,INTP,ENTP,ISFP"}, {user:User.find(2), gender: "Female"}, {user:User.find(3), gender: "Female"}, {user:User.find(5), gender: "Male"}, {user:User.find(6), gender: "Male"}])

 preference2 = Preference.create({user:girl1, gender: "Male", minimum_age:20, maximum_age:35, body_type:["Slender","Athletic and toned","Stocky"], relationship_status:["Never married","Widow/Widower","Currently separated"], salary: nil,  has_children:"No", smokes: ["No way","Occasionally","Cigar aficionado"], drinks: ["Social drinker","Regularly","Moderately"], ethnicity: ["White/Caucasian","Black/African Descent","Asian","Other"], maximum_height: 75, minimum_height:50, religion: ["Atheist","Jewish","Other","Christian"], education:["High school","Bachelors degree","Graduate degree","PhD / Post Doctoral"], dealbreaker: "smokes", most_important: "body_type", personalities: "INFJ,INTP,ENTP,ISFJ,ESFJ,ISTJ,ESTJ"})

matches = Match.create([{requester:boy1,acceptor:girl1,accepted:true,rejected:false},{requester:girl2,acceptor:boy1,accepted:false,rejected:false},{requester:girl3,acceptor:boy1,accepted:false,rejected:true}, {requester:boy2,acceptor:girl1,accepted:true,rejected:false},{requester:boy3,acceptor:girl1,accepted:false,rejected:true}])

user_interests = UserInterest.create([{user:User.find(1), interest:Interest.find(2)},
{user:User.find(1), interest:Interest.find(3)},
{user:User.find(1), interest:Interest.find(5)},
{user:User.find(1), interest:Interest.find(6)},
{user:User.find(2), interest:Interest.find(8)},
{user:User.find(2), interest:Interest.find(10)},
{user:User.find(2), interest:Interest.find(12)},
{user:User.find(3), interest:Interest.find(8)},
{user:User.find(3), interest:Interest.find(2)},
{user:User.find(3), interest:Interest.find(12)},
{user:User.find(4), interest:Interest.find(12)},
{user:User.find(4), interest:Interest.find(5)},
{user:User.find(4), interest:Interest.find(1)},
{user:User.find(5), interest:Interest.find(8)},
{user:User.find(5), interest:Interest.find(12)},
{user:User.find(5), interest:Interest.find(6)},
{user:User.find(6), interest:Interest.find(13)},
{user:User.find(6), interest:Interest.find(2)}

 ])

gender = ["Male", "Female"]
boy_names = ["Ronald", "Henry", "Jake", "Wes", "Mike", "Dave", "Ralph", "Joe", "Winston", "Sam", "Bob", "Arthur", "George", "Tom", "Timothy"]
girl_names = ["Betty", "Sylvia", "Emma", "Emily", "Jen", "Beatrice", "Mildred", "Felicia", "Anna", "Kate", "Belinda", "Maria", "Porticia", "Shelly"]
zip_codes = ["60640", "60618", "60615", "60614", "60613", "60617", "40241" , "60640","60640","60640","60640","60640","60640","60640","60640","60640","60640","60640","60640","60640","60640","60640","60640"]
body_types = ["No answer", "Slender", "Athletic and toned", "Heavyset", "A few extra pounds", "Stocky"]
religions = ["Atheist", "Christian", "Jewish", "Muslim", "Other"]
kids = ["Yes", "No", "Maybe"]
relationship = ["Currently separated", "Divorced", "Widow/Widower"]
smokes = ["No way","Occasionally","Daily","Cigar aficionado","Yes, but trying to quit"]
drinks = ["Never","Social drinker","Regularly","Moderately"]
schools = ["High school","Some college","Associates degree","Bachelors degree","Graduate degree","PhD / Post Doctoral"]
salaries = ["Less than 25,000","$25,001 to $35,000","$35,001 to $50,000","$50,001 to $75,000","$75,001 to $100,000","$100,001 to $150,000", "$150,001+"]
personalities = ["ENFJ", "ENFP", "ENTJ", "ENTP", "ESFJ", "ESFP", "ESTJ", "ESTP", "INFJ", "INFP", "INTJ", "INTP", "ISFJ", "ISFP", "ISTJ", "ISTP"]
ethnicites = ["White/Caucasian", "Black/African Descent", "Asian", "Latino", "Other"]
bios = ["HEY! I'm JUST TRYING TO HAVE SUM FUN ;)", "I'M JUST TRYING TO FIND LOVE", "CALL ME PLZ", "I'm looking for someone to sweep me off my feet", "Must love dogs", "Must hate cats"]

for i in 1..500 do
   user = User.new()
   user.gender = gender.sample
   if user.gender == "Male"
     user.username = boy_names.sample + rand(1000..9999).to_s
   else
     user.username = girl_names.sample + rand(1000..9999).to_s
   end
   user.email = user.username + "@email.com"
   user.password = "password"
   user.password_confirmation = "password"
   user.birthday = [rand(1975..1998), 0, rand(1..9), rand(10..28)].join.to_i
   user.height = rand(50..80)
   user.admin_level = 0
   user.zipcode = zip_codes.sample
   user.body_type = body_types.sample
   user.religion = religions.sample
   randnum = rand(0..25)
   if randnum >19
     user.relationship_status = relationship.sample
   else
     user.relationship_status = "Never married"
   end
   if randnum >16 && randnum < 23
     user.have_children = true
   else
     user.have_children = false
   end
   if user.have_children
     user.number_children = rand(1..4)
   else
     user.number_children == 0
   end
   user.want_children = kids.sample
   user.smoker = smokes.sample
   user.drinker = drinks.sample
   user.education_level = schools.sample
   user.salary = salaries.sample
   user.personality = personalities.sample
   user.ethnicity = ethnicites.sample
   user.bio = bios.sample
   if user.valid?
     user.save
     4.times do
       UserInterest.create({user:user, interest:Interest.find(rand(1..15))})
     end

     preference = Preference.new()
     preference.user = user
     randnum = rand(1..25)
     if user.gender == "Male"
       preference.gender = "Female"
       randnum
       if randnum > 20
         Match.create({requester:user, acceptor:girl1, accepted:true, rejected:false})
       elsif randnum < 6
         Match.create({requester:user, acceptor:girl1, accepted:false, rejected:false})
       end
     else
       preference.gender = "Male"
       if randnum > 20
         Match.create({requester:user, acceptor:boy1, accepted:true, rejected:false})
       elsif randnum < 6
         Match.create({requester:user, acceptor:boy1, accepted:false, rejected:false})
       end
     end
     preference.save
   else
     puts user.errors.full_messages.to_s
   end
 end
