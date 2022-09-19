window.onload = init;
// first the page must load and the function init will be triggered, action will be triggered *after loading*
function init() {
    var button = document.getElementById("addButton");
    //localize the button via id"addButton" and trigger function handleButtonClick, which is show msg alert "Button was clicked!"
    button.onclick = handleButtonClick;
    //handleButtonClick is what happens when the button is clicked, which is specified via the function below
}
function handleButtonClick() {
    var textInput = document.getElementById("songTextInput");
    var songName = textInput.value;
    if (songName == "") {
        alert("Please enter a song");
    } else {
    alert("Adding " + songName);
}
   var li = document.createElement("li");
   li.innerHTML = songName;
   var ul = document.getElementById("playlist");
   ul.appendChild(li);
}