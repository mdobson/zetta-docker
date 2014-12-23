var zetta = require('zetta');

zetta()
  .name('matt.dobson.docker')
  .listen(process.env.NODE_PORT || 1337);
