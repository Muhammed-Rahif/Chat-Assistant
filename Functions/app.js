function respondBot(msg) {
  msg = msg.toLowerCase();
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