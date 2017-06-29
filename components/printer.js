var noflo = require('noflo');

exports.getComponent = function() {
  var c = new noflo.Component();
  c.description = 'Forwards packets and metadata in the same way it receives them';
  c.icon = 'forward';
  c.inPorts.add('in', {
    datatype: 'all',
    description: 'Packet to forward'
  });
  c.process(function (input, output) {
    // Check preconditions on input data
    if (!input.hasData('in')) {
      return;
    }
    // Read packets we need to process
    var data = input.getData('in');
    // Process data and send output
    console.log(data);
    // Deactivate
    output.done();
  });
  return c;
};
