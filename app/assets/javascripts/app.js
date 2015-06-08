$(document).ready(function() {
  $(document).on('click', '#entry-header', function() {
    $.ajax( {
      url: '/date_ideas',
    }).done(function(data) {
      $('#entry-header').remove();
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
      $('body').css('background-color', randomColor);
      var source = $("#entry-template").html();
      var template = Handlebars.compile(source);
      var context = {
          title: data.date_idea.title,
          copyOne: data.date_idea.copy_one,
          copyTwo: data.date_idea.copy_two,
          link: data.date_idea.link,
          };
      var html = template(context);
      $('.date-idea-container').html(html);
    })
  })
})
