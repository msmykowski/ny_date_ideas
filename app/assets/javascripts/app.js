$(document).ready(function() {
  $.ajax( {url: '/', dataType: "json"}).done(function(data) {
    debugger;
    dateIdea = data.date_idea;
    // dateIdea = dateIdeas.pop();
    renderPage(colorPalette, dateIdea);
  });


  $(document).on('click', '#get-info-button', function() {
    // dateIdea = dateIdeas.pop();
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

function matchTitle(copy_one, title) {
  if(title.includes('@')) {title = title.replace("@", 'at');}
  else if (title.includes('(')) {
    title = title.replace("(", '').replace(")", '');
  }
  return copy_one.toLowerCase().match(title.toLowerCase());
}

function splitCopyOne(copy_one, title) {
  if(matchTitle(copy_one, title)) {
    dateTitle = title;
    titleLength = dateTitle.length;
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
  splitCopyOne(data.copy_one, data.title)
  context = {
      title: dateTitle,
      copyOne_1: copyOne_1,
      copyOne_2: copyOne_2,
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
    dateIdea = data.date_ideas;
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
