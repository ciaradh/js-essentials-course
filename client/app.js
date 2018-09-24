var socket = io();

$('form').submit(function () {
  var text = $('#message').val();
  var initials = $('#initials').val();
    
  socket.emit('message', text);
  socket.emit('initials', initials)    
  $('#message').val('');
  $('#initials').val('');
  return false;
});

socket.on('message', function (msg) {
  $('<li class="Chat__historyItem">').text(msg).appendTo('#history');
});