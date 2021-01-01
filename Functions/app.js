function sendMsg() {
    var now=moment().format('MMMM Do YYYY, h:mm:ss a');
    var msg=document.getElementById("text-message").value
    alert("Send msg :"+msg+"Now date :"+now)
}