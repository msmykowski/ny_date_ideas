$(document).ready(function() {
  renderPage(colorPalette);

  $(document).on('click', '#get-info-button', function() {
    renderPage(colorPalette);
  });

});

var source,
    template,
    context,
    html,
    randomColor;

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
      title: data.date_idea.title,
      copyOne: data.date_idea.copy_one,
      copyTwo: data.date_idea.copy_two,
      link: data.date_idea.link
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

function requestDateIdea() {
  return $.ajax( {url: '/', dataType: "json"});
}

function assignLink(data, element) {
  element.on('click', function() {
    window.open(data.date_idea.link, '_blank');
  });
}

function renderPage(colors) {
  requestDateIdea().done(function(data) {
    generateTemplate(data);
    generateBackgroundColor(colors);
  }).then(function(data) {
    assignLink(data, $('#idea-link'));
  });
}
