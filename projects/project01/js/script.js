$(document).ready(function(){
  const songs = [
     { number: "01", title: "Seven Nation Army", src: "music/SevenNationArmy.mp3", album: "Elephant", artist: "The White Stripes", albumArt: "img/whitestripes.jpg" },
     { number: "02", title: "What I Got", src: "music/WhatIGot.mp3", album: "Sublime", artist: "Sublime", albumArt: "img/sublime.jpg" },
     { number: "03", title: "My Own Worst Enemy", src: "music/MyOwnWorstEnemy.mp3", album: "A Place in the Sun", artist: "Lit", albumArt: "img/lit.jpg" },
     { number: "04", title: "Ms. Jackson", src: "music/MsJackson.mp3", album: "Stankonia", artist: "OutKast", albumArt: "img/outkast.jpg" },
     { number: "05", title: "Around The World", src: "music/AroundTheWorld.mp3", album: "Homework", artist: "Daft Punk", albumArt: "img/daftpunk.jpg" },
     { number: "06", title: "Canned Heat", src: "music/CannedHeat.mp3", album: "Synkronized", artist: "Jamiroquai", albumArt: "img/jamiroquai.png" },
     { number: "07", title: "Drive", src: "music/Drive.mp3", album: "Make Yourself", artist: "Incubus", albumArt: "img/incubus.jpg" },
     { number: "08", title: "The Middle", src: "music/TheMiddle.mp3", album: "Bleed America", artist: "Jimmy Eat World", albumArt: "img/jimmyeatworld.jpg" },
     { number: "09", title: "Banquet", src: "music/Banquet.mp3", album: "Silent Alarm", artist: "Bloc Party", albumArt: "img/blocparty.jpg" },

   ];

   let currentSongIndex = 0;

   const $audioPlayer = $("#audio-player");
   const $songNumber = $("#song-number");
   const $songName = $("#song-name");
   const $albumName = $("#album-name");
   const $artistName = $("#artist-name");
   const $albumArt = $("#album-art");
   const $currentTimePlayed = $("#current-time-played");
   const $anotherTimePlayed = $("#another-time-played");

   function loadSong(index, autoplay = false) {
     currentSongIndex = index;
     const song = songs[index];
     $songNumber.text(song.number);
     $songName.text(song.title);
     $albumName.text(song.album);
     $artistName.text(song.artist);
     $albumArt.attr("src", song.albumArt);
     $audioPlayer.attr("src", song.src);
     if (autoplay) {
       $audioPlayer[0].play();
      }
   }

   function updateTimePlayed() {
     const currentTime = $audioPlayer[0].currentTime;
     const minutes = Math.floor(currentTime / 60);
     const seconds = Math.floor(currentTime % 60);
     $currentTimePlayed.text(`${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`);
     $anotherTimePlayed.text(`${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`);
   }

   $audioPlayer.on("timeupdate", function () {
       updateTimePlayed($currentTimePlayed);
       updateTimePlayed($anotherTimePlayed);
   });

   $audioPlayer.on("ended", function () {
      const newIndex = (currentSongIndex + 1) % songs.length;
      loadSong(newIndex, true);
    });

   $("#play").on("click", function () {
     $audioPlayer[0].play();
   });

   $("#pause").on("click", function () {
     $audioPlayer[0].pause();
   });

   $("#previous-song").on("click", function () {
     const newIndex = currentSongIndex === 0 ? songs.length - 1 : currentSongIndex - 1;
     const isPlaying = !$audioPlayer[0].paused;
     loadSong(newIndex, isPlaying);
   });

   $("#next-song").on("click", function () {
     const newIndex = (currentSongIndex + 1) % songs.length;
     const isPlaying = !$audioPlayer[0].paused;
     loadSong(newIndex, isPlaying);
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
