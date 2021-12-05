var ld = document.getElementById('loader')
var hld = document.getElementById('hlo')
//const module = require("./module.js")

//module.a()

window.addEventListener('load', () => {
  ld.style.display = "none"
})

function respondBot(msg) {
  msg = msg.toLowerCase();
  if (msg === "hi") {
    $("#bot").append("<div class='col-md-12'><div class='talk-bubble tri-right round left-top'> <div class='talktext'><p class='yout'>bot</p><p id='bot-chat'>hello...what you want</p></div></div></div></div>");
    return "hello what you want"
  } else if (msg === "") {
    $("#bot").append("<div class='col-md-12'><div class='talk-bubble tri-right round left-top'> <div class='talktext'><p class='yout'>bot</p><p id='bot-chat'>type something...</p></div></div></div></div>");
    return "type something...!!!";
  } else if (msg === "hi how are you?") {
    $("#bot").append("<div class='col-md-12'><div class='talk-bubble tri-right round left-top'> <div class='talktext'><p class='yout'>bot</p><p id='bot-chat'>Yeah,I am good! What about you?</p></div></div></div></div>");
    return "Yeah,I am good! What about you?";
  } else if (msg === "good") {
    $("#bot").append("<div class='col-md-12'><div class='talk-bubble tri-right round left-top'> <div class='talktext'><p class='yout'>bot</p><p id='bot-chat'>" + "(❛‿❛)" + "</p></div></div></div></div>");
    return ":-D";
  } else if (msg === "who developed you?") {
    $("#bot").append("<div class='col-md-12'><div class='talk-bubble tri-right round left-top'> <div class='talktext'><p class='yout'>bot</p><p id='bot-chat' style='color: red; font-weight: bold;'>That's a boy called 'Rahif'</p></div></div></div></div>");
    return "That's a boy called 'Rahif'";
  } else if (msg === "Hello") {
    $("#bot").append("<div class='col-md-12'><div class='talk-bubble tri-right round left-top'> <div class='talktext'><p class='yout'>bot</p><p id='bot-chat'>hey</p></div></div></div></div>");
    return "Hey!";
    
  } else if (msg === "are you robot?") {
    $("#bot").append("<div class='col-md-12'><div class='talk-bubble tri-right round left-top'> <div class='talktext'><p class='yout'>bot</p><p id='bot-chat'>" + "Yes I’m a robot but I’m a smart one!" + "</p></div></div></div></div>");
    return "Yes I’m a robot but I’m a smart one!"
  }


  else {
    $("#bot").append("<div class='col-md-12'><div class='talk-bubble tri-right round left-top'> <div class='talktext'><p class='yout'>bot</p><p id='bot-chat' style='color: green; font-weight: bold;'>/Redirecting " + msg + "</p></div></div></div></div>");
    return false;
  }
}
$(document).ready(() => {
  $('form').submit(false);
  startSpeech();
})

async function sendMsg() {
  var time = moment().format("MMMM Do YYYY, h:mm:ss a");
  var msg = document.getElementById("text-message").value;
  //a()
  b()

  function b() {
    var hidden = document.getElementById('hidden')
    hidden.style.display = 'none'
  }
  //function a(){
  //  var msgA = document.getElementById("text-message").value;
  //        $("#user").append("<div class='col-md-12 user'><div class='talk-bubble tri-right round right-top opacity'><div class='talktext'><p class='you'>you</p><p id='user-chat'>"+msgA+"</p></div></div></div>");
  //  
  // }
  document.getElementById("user-chat").innerHTML = msg;

  let response = await respondBot(msg);
  if (response) {
    document.getElementById("bot-chat").innerHTML = response;
    await textSpeech(response);
  } else {
    await textSpeech(false);
    window.location.href = "https://google.com/search?q=" + msg + "&btnI=I+am+Feeling+Lucky"
  }

}

function textSpeech(text) {
  var player = new talkify.Html5Player();
  if (text) {
    player.playText(text);
  } else {
    player.playText("Redirecting...!");
    document.getElementById("bot-chat").innerHTML = "Redirecting...!";
  }
}



function startSpeech() {
  var player = new talkify.Html5Player();
  player.playText("Hai I am Chat bot. Say 'Hi' to me...!");
}