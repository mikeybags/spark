class AddAttachmentProfilePictureToUsers < ActiveRecord::Migration
  def up
    add_attachment :pictures, :avatar
  end

  def down
    remove_attachment :users, :avatar
  end
end
