let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let currentTimeEl = document.getElementById("currentTime");
let durationEl = document.getElementById("duration");

song.onloadedmetadata = function(){
  progress.max = song.duration;
  durationEl.innerHTML = formatTime(song.duration);
}

function playPause(){
  if(ctrlIcon.classList.contains("fa-pause")){
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  } else {
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
  }
}

song.ontimeupdate = function(){
  progress.value = song.currentTime;
  currentTimeEl.innerHTML = formatTime(song.currentTime);
}

progress.oninput = function(){
  song.currentTime = progress.value;
}

function formatTime(seconds){
  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds % 60);
  if(sec < 10){ sec = "0" + sec }
  return `${min}:${sec}`;
}
