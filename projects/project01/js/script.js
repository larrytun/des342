$(document).ready(function(){
  const songs = [
       { number: "01", title: "Seven Nation Army", src: "music/SevenNationArmy.mp3", album: "Elephant", artist: "The White Stripes", albumArt: "img/whitestripes.jpg" },
   ];
   let currentSongIndex = 0;

   const $audioPlayer = $("#audio-player");
   const $songNumber = $("#song-number");
   const $songName = $("#song-name");
   const $albumName = $("#album-name");
   const $artistName = $("#artist-name");
   const $albumArt = $("#album-art");
   const $currentTimePlayed = $("#current-time-played");

   function loadSong(index) {
       currentSongIndex = index;
       const song = songs[index];
       $songNumber.text(song.number);
       $songName.text(song.title);
       $albumName.text(song.album);
       $artistName.text(song.artist);
       $albumArt.attr("src", song.albumArt);
       $audioPlayer.attr("src", song.src);
   }

   function updateTimePlayed() {
       const currentTime = $audioPlayer[0].currentTime;
       const minutes = Math.floor(currentTime / 60);
       const seconds = Math.floor(currentTime % 60);
       $currentTimePlayed.text(`${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`);
   }

   $audioPlayer.on("timeupdate", updateTimePlayed);

   $("#play").on("click", function () {
       $audioPlayer[0].play();
   });

   $("#pause").on("click", function () {
       $audioPlayer[0].pause();
   });

   $("#previous-song").on("click", function () {
       const newIndex = currentSongIndex === 0 ? songs.length - 1 : currentSongIndex - 1;
       loadSong(newIndex);
   });

   $("#next-song").on("click", function () {
       const newIndex = (currentSongIndex + 1) % songs.length;
       loadSong(newIndex);
   });

   loadSong(0);

  function displayCurrentTime() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let timeString = hours + ':' + minutes + ' ' + ampm;
    $('#current-time').text(timeString);
  }
    displayCurrentTime();
    setInterval(displayCurrentTime, 3000);
  $('#power').click(function(){
    $('#power').toggleClass('on');
    $('.wrapper').toggleClass('zoom');
    $('.desktop').toggleClass('on');
  });
  $('#paint').click(function(){
    $('.paint_program').toggleClass('on');
    $('.back_button').toggleClass('on');
  });
  $('#lemmings').click(function(){
    $('.lemmings_program').toggleClass('on');
    $('.back_button').toggleClass('on');
  });
  $('#oregon').click(function(){
    $('.oregon_program').toggleClass('on');
    $('.back_button').toggleClass('on');
  });
  $('#music').click(function(){
    $('.music_app').addClass('on');
  });
  $('#close-sm').click(function(){
    $('.music_app').removeClass('on');
  });
  $('#back_01').click(function(){
    $('.paint_program').removeClass('on');
    $('.lemmings_program').removeClass('on');
    $('.oregon_program').removeClass('on');
    $('.back_button').toggleClass('on');
  });
});
