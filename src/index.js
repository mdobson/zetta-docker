var zetta = require('zetta');

function randomName() {
  var firstNames = ['turbulent', 'tumultuous', 'windy', 'rough', 'calm', 'pristine', 'stormy', 'south', 'north', 'west'];
  var lastNames = ['huron', 'caribbean', 'michigan', 'erie', 'superior', 'pacific', 'atlantic', 'arctic', 'black_sea', 'red_sea'];  

  var firstName = Math.floor(Math.random() * (firstNames.length));
  var lastName = Math.floor(Math.random() * (lastNames.length));
  return [firstNames[firstName], lastNames[lastName]].join('_');
}


zetta()
  .name(process.env.NAME || randomName())
  .listen(process.env.NODE_PORT || 1337);
