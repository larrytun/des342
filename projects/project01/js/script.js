$(document).ready(function(){
  $('#power').click(function(){
    $('#power').toggleClass('on');
    $('.wrapper').toggleClass('zoom');
    $('.desktop').toggleClass('on');
  });
  $('#paint').click(function(){
    $('.paint_program').toggleClass('on');
  });
  $('#lemmings').click(function(){
    $('.lemmings_program').toggleClass('on');
  });
  $('#oregon').click(function(){
    $('.oregon_program').toggleClass('on');
  });
});
