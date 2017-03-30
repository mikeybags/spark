// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

App.messages = App.cable.subscriptions.create('MessagesChannel', {
  received: function(data) {
    if(data.content){
      if(typeof data.sender != 'undefined' && typeof data.sender_id != 'undefined' && data.sender_id == data.sender){
        $("#messages").append('<p class="sender">'+data.content+'</p>')
      }
      else if(typeof data.sender != 'undefined' && typeof data.sender_id != 'undefined' && data.sender_id !== data.sender){
      $("#messages").append('<p class="sender">'+data.content+'</p>')
      }
    }
    chatroom_id = data.chatroom_id
    return $("[data-chatroom='" + data.chatroom_id + "']").append(data.content);
  }
});

$(document).on('turbolinks:load', function() {
  submitNewMessage();
});


function submitNewMessage(){
  $('textarea#message_content').keydown(function(event) {
    if (event.keyCode === 13) {
        var msg = event.target.value
        var chatroomId = $("#chatroom").val()
        App.messages.send({message: msg, chatroom_id: chatroomId})
        event.target.value = ''
        event.preventDefault()
     }
  });
}
