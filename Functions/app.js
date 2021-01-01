function respondBot(msg) {
    msg.toLowerCase()
  if (msg === "hi") {
    return "Hello!";
  } else if (msg === "") {
    return "type something...!!!";
  } else if (msg === "hi how are you?") {
    return "Yeah..I am good! What about you?";
  } else if (msg === "Good") {
    return ":-D";
  }else if (msg === "who developed you?") {
    return "That's a boy called 'Rahif'";
  }else if (msg === "Hello") {
    return "Hey!";
  }else if (msg === "who developed you?") {
    return "That's a boy called 'Rahif'";
  }
  
  
  
  else {
    return "I am confused...!";
  }
}

function sendMsg() {
  var time = moment().format("MMMM Do YYYY, h:mm:ss a");
  var msg = document.getElementById("text-message").value;

  document.getElementById("user-chat").innerHTML = msg;

  let response = respondBot(msg);
  document.getElementById("bot-chat").innerHTML = response;


}