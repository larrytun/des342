$(document).ready(function(){
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
  $('#back_01').click(function(){
    $('.paint_program').removeClass('on');
    $('.lemmings_program').removeClass('on');
    $('.oregon_program').removeClass('on');
    $('.back_button').toggleClass('on');
  });
});
