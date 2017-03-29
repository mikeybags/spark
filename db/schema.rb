# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170329002036) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "favorites", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "match_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["match_id"], name: "index_favorites_on_match_id", using: :btree
    t.index ["user_id"], name: "index_favorites_on_user_id", using: :btree
  end

  create_table "interests", force: :cascade do |t|
    t.string   "interest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "matches", force: :cascade do |t|
    t.integer  "requester_id"
    t.integer  "acceptor_id"
    t.boolean  "accepted",     default: false
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
    t.index ["acceptor_id"], name: "index_matches_on_acceptor_id", using: :btree
    t.index ["requester_id"], name: "index_matches_on_requester_id", using: :btree
  end

  create_table "messages", force: :cascade do |t|
    t.integer  "match_id"
    t.text     "message"
    t.integer  "sender_id"
    t.integer  "receiver_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["match_id"], name: "index_messages_on_match_id", using: :btree
    t.index ["receiver_id"], name: "index_messages_on_receiver_id", using: :btree
    t.index ["sender_id"], name: "index_messages_on_sender_id", using: :btree
  end

  create_table "pictures", force: :cascade do |t|
    t.string   "image_path"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_pictures_on_user_id", using: :btree
  end

  create_table "preferences", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "distance"
    t.integer  "minimum_age"
    t.integer  "maximum_age"
    t.string   "body_type"
    t.string   "relationship_status"
    t.string   "has_children"
    t.string   "smokes"
    t.string   "drinks"
    t.string   "ethnicity"
    t.string   "religion"
    t.string   "education"
    t.integer  "minimum_height"
    t.integer  "maximum_height"
    t.string   "dealbreaker"
    t.string   "most_important"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.string   "personalities"
    t.string   "gender"
    t.string   "salary"
    t.index ["user_id"], name: "index_preferences_on_user_id", using: :btree
  end

  create_table "user_interests", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "interest_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["interest_id"], name: "index_user_interests_on_interest_id", using: :btree
    t.index ["user_id"], name: "index_user_interests_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username"
    t.string   "password_digest"
    t.string   "email"
    t.date     "birthday"
    t.integer  "height"
    t.string   "body_type"
    t.string   "relationship_status"
    t.boolean  "have_children"
    t.integer  "number_children"
    t.string   "want_children"
    t.string   "education_level"
    t.string   "smoker"
    t.string   "drinker"
    t.string   "ethnicity"
    t.string   "religion"
    t.string   "salary"
    t.text     "bio"
    t.string   "profile_picture"
    t.integer  "zipcode"
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
    t.string   "personality"
    t.integer  "admin_level"
    t.string   "gender"
    t.integer  "compatability"
    t.string   "profile_picture_file_name"
    t.string   "profile_picture_content_type"
    t.integer  "profile_picture_file_size"
    t.datetime "profile_picture_updated_at"
    t.string   "city"
    t.string   "state"
  end

  add_foreign_key "favorites", "matches"
  add_foreign_key "favorites", "users"
  add_foreign_key "pictures", "users"
  add_foreign_key "preferences", "users"
  add_foreign_key "user_interests", "interests"
  add_foreign_key "user_interests", "users"
end
