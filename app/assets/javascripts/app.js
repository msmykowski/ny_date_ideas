$(document).ready(function() {
  $('.button').click(function() {
    $.ajax( {
      url: '/date_ideas',
    }).done(function(data) {
      console.log(data);
    })
  })
})
