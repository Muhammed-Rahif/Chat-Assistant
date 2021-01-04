function respondBot(msg) {
  msg=msg.toLowerCase();
  if (msg === "hi") {
    return "Hello!";
  } else if (msg === "") {
    return "type something...!!!";
  } else if (msg === "hi how are you?") {
    return "Yeah,I am good! What about you?";
  } else if (msg === "good") {
    return ":-D";
  } else if (msg === "who developed you?") {
    return "That's a boy called 'Rahif'";
  } else if (msg === "Hello") {
    return "Hey!";
  } 
  
  
  else {
    return "I am confused...!";
  }
}

$(document).ready(()=>{
  $('form').submit(false);
  startSpeech();
})

function sendMsg() {
  var time = moment().format("MMMM Do YYYY, h:mm:ss a");
  var msg = document.getElementById("text-message").value;

  document.getElementById("user-chat").innerHTML = msg;

  let response = respondBot(msg);
  document.getElementById("bot-chat").innerHTML = response;

  textSpeech();
}

function textSpeech() {
  var player = new talkify.Html5Player();
  var msg = document.getElementById("text-message").value;
  let text = respondBot(msg);
  player.playText(text);
}



function startSpeech() {
  var player = new talkify.Html5Player();
  var msg = document.getElementById("text-message").value;
  let text = respondBot(msg);
  player.playText("Hai I am Chat bot. Say 'Hi' to me...!");
}