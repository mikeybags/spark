# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
interests = Interest.create([{interest: 'books'}, {interest: 'camping'},{interest: 'coffee and conversation'},{interest: 'business'},{interest: 'cooking'},{interest: 'dining out'},{interest: 'fishing/hunting'},{interest: 'gardening'},{interest: 'hobbies and crafts'},{interest: 'movies'},{interest: 'museums and art'},{interest: 'music'},{interest: 'exploring'},{interest: 'nightclubs and dancing'},{interest: 'performing arts'},{interest: 'playing cards/board games'},{interest: 'playing sports'},{interest: 'political events'},{interest: 'religion/spirituality'},{interest: 'shopping/antiques'},{interest: 'travel'},{interest: 'video games'},{interest: 'volunteering'},{interest: 'watching sports'},{interest: 'wine tasting'}])

boy1 = User.create({email:'mick@email.com', username:"MasterMick", gender: "man", password:"password", password_confirmation: "password", birthday: 19930324, height: 70, body_type: "no answer", relationship_status: "widow | widower", have_children: false, number_children: 0, want_children: "maybe", education_level: "bachelors degree", smoker: "never", drinker: "regularly", ethnicity: "white", religion:"atheist", salary:"less than $25,000", bio:"HEY! I'm JUST TRYING TO HAVE SUM FUN ;)", zipcode: 60640, personality: "ENFJ", admin_level:1})

boy2 = User.create({email:'curtis@email.com', username:"CurtThaDurt", gender: "man", password:"password", password_confirmation: "password", birthday: 19920119, height: 68, body_type: "athletic and toned", relationship_status: "divorced", have_children: true, number_children: 3, want_children: "maybe", education_level: "high school", smoker: "cigar aficionado", drinker: "never", ethnicity: "black, asian,", religion:"jewish", salary:"$50,001 to $75,000", bio:"HEY! I'm JUST TRYING TO FIND LOVE", zipcode: 60612, personality: "INTP", admin_level:1})

boy3 = User.create({email:'mike@email.com', username:"MikeDrop", gender: "man", password:"password", password_confirmation: "password", birthday: 19880629, height: 70, body_type: "heavyset", relationship_status: "never married", have_children: false, number_children: 0, want_children: "yes", education_level: "associates degree", smoker: "no answer", drinker: "moderately", ethnicity: "asian, white,", religion:"muslim", salary:"less than $25,000", bio:"HEY! CALL ME", zipcode: 60658, personality: "ISTJ", admin_level:1})

girl1 = User.create({email:'laura@email.com', username:"LaurOfTheRings", gender: "woman", password:"password", password_confirmation: "password", birthday: 19900627, height: 65, body_type: "slender", relationship_status: "currently separated", have_children: false, number_children: 0, want_children: "yes", education_level: "phd / post doctoral", smoker: "daily", drinker: "regularly", ethnicity: "white,", religion:"other", salary:"$35,001 to $50,000", bio:"I'm looking for someone to sweep me off my feet", zipcode: 40241, personality: "ESTP", admin_level:0})

girl2 = User.create({email:'cheryl@email.com', username:"KeepItCheryeal", gender: "woman", password:"password", password_confirmation: "password", birthday: 19940103, height: 60, body_type: "no answer", relationship_status: "divorced", have_children: false, number_children: 0, want_children: "yes", education_level: "graduate degree", smoker: "occasionally", drinker: "social drinker", ethnicity: "latino,", religion:"jewish", salary:"$100,001 to $150,000", bio:"Must love dogs", zipcode: 60615, personality: "ENTP", admin_level:0})

girl3 = User.create({email:'vanessa@email.com', username:"VWVan", gender: "woman", password:"password", password_confirmation: "password", birthday: 19800927, height: 61, body_type: "athletic and toned", relationship_status: "never married", have_children: true, number_children: 2, want_children: "no", education_level: "no answer", smoker: "no way", drinker: "never", ethnicity: "asian, other,", religion:"atheist", salary:"$75,001 to $100,000", bio:"Must hate cats", zipcode: 60640, personality: "INFJ", admin_level:0})

 preference1 = Preference.create([{user:User.find(1), gender: "woman", minimum_age:22, maximum_age:30, body_type:"slender,athletic and toned,stocky", relationship_status:"never married,widow | widower", salary: nil,  has_children:"no", smokes: "no way,occasionally,cigar aficionado", drinks: "social drinker,regularly,moderately", ethnicity: "white,black,asian", maximum_height: 70, minimum_height:55, religion: "atheist,jewish,other", education:"bachelors degree,graduate degree,phd / post doctoral", dealbreaker: "smokes", most_important: "drinks", personalities: "INFP,ENFP,INFJ,ENFJ,INTP,ENTP,ISFP"}, {user:User.find(2), gender: "woman"}, {user:User.find(3), gender: "woman"}, {user:User.find(4), gender: "man"}, {user:User.find(5), gender: "man"}, {user:User.find(6), gender: "man"}])

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
