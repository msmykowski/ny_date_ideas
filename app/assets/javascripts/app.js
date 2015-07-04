$(document).ready(function() {
  $.ajax( {url: '/', dataType: "json"}).done(function(data) {
    dateIdeas = data.date_ideas;
    dateIdea = dateIdeas.pop();
    renderPage(colorPalette, dateIdea);
  });


  $(document).on('click', '#get-info-button', function() {
    dateIdea = dateIdeas.pop();
    renderPage(colorPalette, dateIdea);
  });

});

var dateIdeas,
    dateIdea;

var source,
    template,
    context,
    html,
    randomColor,
    dateTitle,
    titleLength,
    firstSlice,
    secondSlice,
    copyOne_1,
    copyOne_2;

var colorPalette = [
  '#FC7A57',
  '#68AED6',
  '#EDF296',
  '#97D5A4',
  '#B2DD7A',
  '#EABE7C',
  '#DB6B4C',
  '#5186A5',
  '#CACE80',
  '#2CB281',
  '#982649'
  ];

function generateTemplate(data) {
  source = $("#entry-template").html();
  template = Handlebars.compile(source);
  context = {
      title: data.title_in_copy,
      copyOne_1: data.split_copy_one.half_one,
      copyOne_2: data.split_copy_one.half_two,
      copyTwo: data.copy_two,
      link: data.link
      };
  html = template(context);
  $('.date-idea-container').html(html);
}

function styleButton(element) {
  element.hover(function(){
    element.css('color', randomColor);
    element.css('background-color', '#424242');
  }, function() {
    element.css('background-color', randomColor );
    element.css('color', '#424242');
  });
}

function generateBackgroundColor(colors) {
  randomColor = colors[Math.floor(Math.random()*10)];
  $('body').css('background-color', randomColor);
  styleButton($('#get-info-button'));
  styleButton($('#idea-link'));
}

function getDateIdeas() {
  $.ajax( {url: '/', dataType: "json"}).done(function(data) {
    dateIdeas = data.date_ideas;
  });
}

function assignLink(data, element) {
  element.on('click', function() {
    window.open(data.link, '_blank');
  });
}

function renderPage(colors, data) {
  generateTemplate(data);
  generateBackgroundColor(colors);
  assignLink(data, $('#idea-link'));
}
