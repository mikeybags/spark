app.controller('questionnaireController', ['$scope', 'userFactory', '$location', '$cookies', function($scope, userFactory, $location, $cookies ){
  if (!$cookies.get("id")){
    $location.url('/')
  }
  else{
    $scope.user = $cookies.get("user");
    $scope.view = 0;
    $scope.personality = {
      "E/I": 0,
      "N/S": 0,
      "T/F": 0,
      "J/P": 0
    }
    $scope.questions = {
      "0": {
        "0":["You find it difficult to introduce yourself to other people.", "I"],
        "1":["You often get so lost in thoughts that you ignore or forget your surroundings.", "N"],
        "2":["You try to respond to your e-mails as soon as possible and cannot stand a messy inbox.", "J"],
        "3":["You find it easy to stay relaxed and focused even when there is some pressure.", "J"],
        "4":["You do not usually initiate conversations.", "I"],
        "5":["You rarely do something just out of sheer curiosity.", "S"],
        "6": ["People can rarely upset you.", "F"]
      },
      "1": {
        "7":["Being organized is more important to you than being adaptable.", "J"],
        "8":["Keeping your options open is more important than having a to-do list.", "P"],
        "9":["Winning a debate matters less to you than making sure no one gets upset.", "T"],
        "10":["You often feel as if you have to justify yourself to other people.", "F"],
        "11":["Your home and work environments are quite tidy.", "J"],
        "12": ["You do not mind being at the center of attention.", "E"],
        "13": ["You consider yourself more practical than creative.", "T"]
      },
      "2": {
        "14":["Logic is usually more important than heart when it comes to making important decisions.", "T"],
        "15": ["Your travel plans are usually well thought out.", "J"],
        "16": ["It is often difficult for you to relate to other people’s feelings.", "T"],
        "17": ["Your mood can change very quickly.", "F"],
        "18": ["You would rather improvise than spend time coming up with a detailed plan.", "P"],
        "19": ["You rarely worry about how your actions affect other people.", "T"],
        "20": ["You rarely feel insecure.", "S"]
      },
      "3": {
        "21": ["You are more of a natural improviser than a careful planner.", "P"],
        "22": ["An interesting book or a video game is often better than a social event.", "I"],
        "23": ["Being able to develop a plan and stick to it is the most important part of every project.", "J"],
        "24": ["You rarely get carried away by fantasies and ideas.", "S"],
        "25": ["You often find yourself lost in thought when you are walking in nature.", "N"],
        "26": ["If someone does not respond to your e-mail quickly, you start worrying if you said something wrong.", "N"]
      },
      "4": {
        "27": ["As a parent, you would rather see your child grow up kind than smart.", "F"],
        "28": ["You do not let other people influence your actions.", "T"],
        "29": ["Your dreams tend to focus on the real world and its events.", "S"],
        "30": ["It does not take you much time to start getting involved in social activities at your new workplace.", "E"],
        "31": ["You are more of a natural improviser than a careful planner.", "P"],
        "32": ["You feel more energetic after spending time with a group of people.", "E"]
      },
      "5": {
        "33": ["You would not call yourself a dreamer.", "S"],
        "34": ["You often spend time exploring unrealistic and impractical yet intriguing ideas.", "N"],
        "35": ["Generally speaking, you rely more on your experience than your imagination.", "S"],
        "36": ["You are a relatively reserved and quiet person.", "I"],
        "37": ["You usually find it difficult to relax when talking in front of many people.", "I"],
        "38": ["If the room is full, you stay closer to the walls, avoiding the center.", "I"]
      }
    }
    $scope.questionnaire = {}
    var question = ""
    for (var i = 0; i < 39; i++){
      question = i.toString()
      $scope.questionnaire[question] = 0
    }
    $scope.nextView = function(){
      $scope.view += 1;
    }
    $scope.updateAnswers = function(question, preference, weight){
      $scope.questionnaire[question] = [preference, weight];
    }
    $scope.getResults = function(){
      var answer;
      for (var key in $scope.questionnaire){
        answer = $scope.questionnaire[key]
        if (answer[0] == "E"){
          $scope.personality["E/I"] += answer[1]
        }
        else if (answer[0] == "I"){
          $scope.personality["E/I"] -= answer[1]
        }
        else if (answer[0] == "S"){
          $scope.personality["N/S"] += answer[1]
        }
        else if (answer[0] == "N"){
          $scope.personality["N/S"] -= answer[1]
        }
        else if (answer[0] == "J"){
          $scope.personality["J/P"] += answer[1]
        }
        else if (answer[0] == "P"){
          $scope.personality["J/P"] -= answer[1]
        }
        else if (answer[0] == "F"){
          $scope.personality["T/F"] += answer[1]
        }
        else if (answer[0] == "T"){
          $scope.personality["T/F"] -= answer[1]
        }
      }
      $scope.result = ""
      if ($scope.personality["E/I"] > 0){
        $scope.result += "E"
      }
      else {
        $scope.result += "I"
      }
      if ($scope.personality["N/S"] > 0){
        $scope.result += "S"
      }
      else {
        $scope.result += "N"
      }
      if ($scope.personality["T/F"] > 0){
        $scope.result += "F"
      }
      else {
        $scope.result += "T"
      }
      if ($scope.personality["J/P"] > 0){
        $scope.result += "P"
      }
      else {
        $scope.result += "J"
      }
      $cookies.put("personality", $scope.result)
      $scope.view += 1;
      userFactory.updatePersonality($scope.result, function(){
      })
    }
    $scope.personality_descriptions = {
      "INTJ": "It’s lonely at the top, and being one of the rarest and most strategically capable personality types, INTJs know this all too well. INTJs form just two percent of the population, and women of this personality type are especially rare, forming just 0.8% of the population – it is often a challenge for them to find like-minded individuals who are able to keep up with their relentless intellectualism and chess-like maneuvering. People with the INTJ personality type are imaginative yet decisive, ambitious yet private, amazingly curious, but they do not squander their energy.",
      "INTP": "The INTP personality type is fairly rare, making up only three percent of the population, which is definitely a good thing for them, as there’s nothing they’d be more unhappy about than being 'common'. INTPs pride themselves on their inventiveness and creativity, their unique perspective and vigorous intellect. Usually known as the philosopher, the architect, or the dreamy professor, INTPs have been responsible for many scientific discoveries throughout history.",
      "ENTJ":"ENTJs are natural-born leaders. People with this personality type embody the gifts of charisma and confidence, and project authority in a way that draws crowds together behind a common goal. But unlike their Feeling (F) counterpart, ENTJs are characterized by an often ruthless level of rationality, using their drive, determination and sharp minds to achieve whatever end they’ve set for themselves. Perhaps it is best that they make up only three percent of the population, lest they overwhelm the more timid and sensitive personality types that make up much of the rest of the world – but we have ENTJs to thank for many of the businesses and institutions we take for granted every day.",
      "ENTP":"The ENTP personality type is the ultimate devil’s advocate, thriving on the process of shredding arguments and beliefs and letting the ribbons drift in the wind for all to see. Unlike their more determined Judging (J) counterparts, ENTPs don’t do this because they are trying to achieve some deeper purpose or strategic goal, but for the simple reason that it’s fun. No one loves the process of mental sparring more than ENTPs, as it gives them a chance to exercise their effortlessly quick wit, broad accumulated knowledge base, and capacity for connecting disparate ideas to prove their points.",
      "INFJ":"The INFJ personality type is very rare, making up less than one percent of the population, but they nonetheless leave their mark on the world. As Diplomats, they have an inborn sense of idealism and morality, but what sets them apart is the accompanying Judging (J) trait – INFJs are not idle dreamers, but people capable of taking concrete steps to realize their goals and make a lasting positive impact.",
      "INFP":"INFP personalities are true idealists, always looking for the hint of good in even the worst of people and events, searching for ways to make things better. While they may be perceived as calm, reserved, or even shy, INFPs have an inner flame and passion that can truly shine. Comprising just 4% of the population, the risk of feeling misunderstood is unfortunately high for the INFP personality type – but when they find like-minded people to spend their time with, the harmony they feel will be a fountain of joy and inspiration.",
      "ENFJ":"ENFJs are natural-born leaders, full of passion and charisma. Forming around two percent of the population, they are oftentimes our politicians, our coaches and our teachers, reaching out and inspiring others to achieve and to do good in the world. With a natural confidence that begets influence, ENFJs take a great deal of pride and joy in guiding others to work together to improve themselves and their community.",
      "ISTJ":"The ISTJ personality type is thought to be the most abundant, making up around 13% of the population. Their defining characteristics of integrity, practical logic and tireless dedication to duty make ISTJs a vital core to many families, as well as organizations that uphold traditions, rules and standards, such as law offices, regulatory bodies and military. People with the ISTJ personality type enjoy taking responsibility for their actions, and take pride in the work they do – when working towards a goal, ISTJs hold back none of their time and energy completing each relevant task with accuracy and patience.",
      "ISFJ":"The ISFJ personality type is quite unique, as many of their qualities defy the definition of their individual traits. Though possessing the Feeling (F) trait, ISFJs have excellent analytical abilities; though Introverted (I), they have well-developed people skills and robust social relationships; and though they are a Judging (J) type, ISFJs are often receptive to change and new ideas. As with so many things, people with the ISFJ personality type are more than the sum of their parts, and it is the way they use these strengths that defines who they are.",
      "ESTJ":"ESTJs are representatives of tradition and order, utilizing their understanding of what is right, wrong and socially acceptable to bring families and communities together. Embracing the values of honesty, dedication and dignity, people with the ESTJ personality type are valued for their clear advice and guidance, and they happily lead the way on difficult paths. Taking pride in bringing people together, ESTJs often take on roles as community organizers, working hard to bring everyone together in celebration of cherished local events, or in defense of the traditional values that hold families and communities together.",
      "ESFJ":"People who share the ESFJ personality type are, for lack of a better word, popular – which makes sense, given that it is also a very common personality type, making up twelve percent of the population. In high school, ESFJs are the cheerleaders and the quarterbacks, setting the tone, taking the spotlight and leading their teams forward to victory and fame. Later in life, ESFJs continue to enjoy supporting their friends and loved ones, organizing social gatherings and doing their best to make sure everyone is happy.",
      "ISTP":"ISTPs love to explore with their hands and their eyes, touching and examining the world around them with cool rationalism and spirited curiosity. People with this personality type are natural Makers, moving from project to project, building the useful and the superfluous for the fun of it, and learning from their environment as they go. Often mechanics and engineers, ISTPs find no greater joy than in getting their hands dirty pulling things apart and putting them back together, just a little bit better than they were before.",
      "ISFP":"ISFP personality types are true artists, but not necessarily in the typical sense where they’re out painting happy little trees. Often enough though, they are perfectly capable of this. Rather, it’s that they use aesthetics, design and even their choices and actions to push the limits of social convention. ISFPs enjoy upsetting traditional expectations with experiments in beauty and behavior – chances are, they’ve expressed more than once the phrase 'Don’t box me in!'",
      "ESTP":"ESTP personality types always have an impact on their immediate surroundings – the best way to spot them at a party is to look for the whirling eddy of people flitting about them as they move from group to group. Laughing and entertaining with a blunt and earthy humor, ESTP personalities love to be the center of attention. If an audience member is asked to come on stage, ESTPs volunteer – or volunteer a shy friend.",
      "ESFP":"If anyone is to be found spontaneously breaking into song and dance, it is the ESFP personality type. ESFPs get caught up in the excitement of the moment, and want everyone else to feel that way, too. No other personality type is as generous with their time and energy as ESFPs when it comes to encouraging others, and no other personality type does it with such irresistible style."
    }
  }
}])
