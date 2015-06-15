$(document).ready(function() {
  $(document).on('click', '#entry-header', function() {
    $.ajax( {
      url: '/date_ideas',
    }).done(function(data) {
      $('#entry-header').remove();
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
      var colorPalette = ['#FC7A57', '#68AED6', '#EDF296', '#97D5A4','#B2DD7A','#EABE7C'];
      var randomNumber = Math.floor(Math.random()*4);
      randomColor = colorPalette[randomNumber];
      $('body').css('background-color', randomColor);
      var source = $("#entry-template").html();
      var template = Handlebars.compile(source);
      var context = {
          title: data.date_idea.title,
          copyOne: data.date_idea.copy_one,
          copyTwo: data.date_idea.copy_two,
          link: data.date_idea.link
          };
      var html = template(context);
      $('.date-idea-container').html(html);
    }).then(function(data) {
      $('#idea-link').on('click', function() {
        window.location.href=data.date_idea.link;
      })
    })
  })


});
