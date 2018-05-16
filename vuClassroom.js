//File: vuClassroom.js


/*
/ Media screen & Playlist
/
/
/
*/

//Set the default video volume; add a defaultSoundLv as a profile settings option
document.getElementById("currentVideo").volume = 0.07;

//Loads a video into the displayScreen when a video is click selected in the #fileSelectionArea
function displayPlaylistItem(imgVidId)
{
 var video = document.getElementById('currentVideo');
 
 //Include the same id in videos and their associated thumbnail images 
 video.setAttribute("src", "Videos/video" + imgVidId + ".mp4");
}


/*
/ Chat Messaging
/
/
/
*/
function sendChatInput()
{
 //get input text
 var chatInput = document.getElementById("chatTypeBox").value;
 
 //clear input text
 document.getElementById("chatTypeBox").value = "";
 
 //write text to room
 document.getElementById("chatRoomBox").innerHTML += ("<p> Gohst: " + chatInput + "</p>");
 
 //scroll textbox down (to show most recent)
 var objDiv = document.getElementById("chatRoomBox");
 objDiv.scrollTop = objDiv.scrollHeight;
}

document.getElementById('chatTypeBox').onkeypress=function(e){
    if(e.keyCode==13){
        document.getElementById('chatSendButton').click();
    }
}