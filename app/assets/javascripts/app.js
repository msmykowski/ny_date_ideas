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

function matchTitle(copy_one, title) {
  if(title.includes('@')) {title.replace("@", 'at');}
  return copy_one.toLowerCase().match(title.toLowerCase());
}

function splitCopyOne(copy_one, title) {
  dateTitle = title;
  titleLength = dateTitle.length;
  if(matchTitle(copy_one, dateTitle)) {
    firstSlice = matchTitle(copy_one, dateTitle).index;
    secondSlice = firstSlice + titleLength;
    copyOne_1 = copy_one.slice(0,firstSlice);
    copyOne_2 = copy_one.slice(secondSlice);
  }
  else {
    splitCopyOne(copy_one, title.slice(0,-1));
  }
}

function generateTemplate(data) {
  source = $("#entry-template").html();
  template = Handlebars.compile(source);
  splitCopyOne(data.date_idea.copy_one, data.date_idea.title)
  context = {
      title: dateTitle,
      copyOne_1: copyOne_1,
      copyOne_2: copyOne_2,
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
