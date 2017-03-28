class Preference < ApplicationRecord
  belongs_to :user

@@personalities = {
  INFP: {
    match: ['INFP', 'ENFP', 'INFJ', 'ENFJ', 'INTP', 'ENTP']
  },
  ENFP: {
    match: ['INFP', 'ENFP', 'INFJ', 'ENFJ', 'INTP', 'ENTP']
  },
  INFJ: {
    match: ['INFP', 'ENFP', 'INFJ', 'ENFJ', 'INTP', 'ENTP']
  },
  ENFJ: {
    match: ['INFP', 'ENFP', 'INFJ', 'ENFJ', 'INTP', 'ENTP', 'ISFP']
  },
  INTJ: {
    match: ['INFP', 'ENFP', 'INFJ', 'ENFJ', 'INTP', 'ENTP']
  },
  ENTJ: {
    match: ['INFP', 'ENFP', 'INFJ', 'ENFJ', 'INTP', 'ENTP']
  },
  INTP: {
    match: ['INFP', 'ENFP', 'INFJ', 'ENFJ', 'INTP', 'ENTP']
  },
  ENTP: {
    match: ['INFP', 'ENFP', 'INFJ', 'ENFJ', 'INTP', 'ENTP']
  },
  ISFP: {
    match: ['ENFJ', 'INFJ', 'ENFJ', 'INTP', 'ENTP', 'ISFJ', 'ESFJ', 'ISTJ', 'ESTJ']
  },
  ESFP: {
    match: ['ENFJ', 'INFJ', 'INTP', 'ENTP', 'ISFJ', 'ESFJ', 'ISTJ', 'ESTJ']
  },
  ISTP: {
    match: ['INFJ', 'INTP', 'ENTP', 'ISFJ', 'ESFJ', 'ISTJ', 'ESTJ']
  },
  ESTP: {
    match: ['INFJ', 'INTP', 'ENTP', 'ISFJ', 'ESFJ', 'ISTJ', 'ESTJ']
  },
  ISFJ: {
    match: ['ENTJ', 'ISFP', 'ESFP', 'ISTP', 'ESTP', 'ISFJ', 'ESFJ', 'ISTJ', 'ESTJ']
  },
  ESFJ: {
    match: ['ENTJ', 'ISFP', 'ESFP', 'ISTP', 'ESTP', 'ISFJ', 'ESFJ', 'ISTJ', 'ESTJ']
  },
  ISTJ: {
    match: ['ENTJ', 'ISFP', 'ESFP', 'ISTP', 'ESTP', 'ISFJ', 'ESFJ', 'ISTJ', 'ESTJ']
  },
  ESTJ: {
    match: ['ENTJ', 'ISFP', 'ESFP', 'ISTP', 'ESTP', 'ISFJ', 'ESFJ', 'ISTJ', 'ESTJ']
  }
}
def self.addPersonalityPreferences(personality)
  preferences = @@personalities[personality.to_sym][:match]
  preferences.join(",")
end
end
