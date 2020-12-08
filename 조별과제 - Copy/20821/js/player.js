window.onload = function () {
  var player = document.getElementById('player');
  var video = document.getElementById('video');
  player.onclick = function () {
    if(video.style.opacity == 0){
      video.style.opacity = 1;
      video.style.zIndex = 1;
      player.style.opacity = 0.7;
    }
    else{
      video.style.opacity = 0;
      video.style.zIndex = -2;
      player.style.opacity = 1;
    }
  }
}