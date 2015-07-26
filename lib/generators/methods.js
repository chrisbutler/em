var path = require('path');

var MethodGenerator = Generator.create({
  name: 'methods',
  aliases: ['m'],
  usage: 'iron {generate, g}:{methods, m} <name> [--where]',
  description: 'Generate scaffolding for a Method file.',
  examples: [
    'iron g:methods todos --where "server"'
  ]
}, function (args, opts) {

  var context = {
    name: opts.resourceName,
    where: opts.where
  };

  this.template(
    'methods/methods.js',
    this.pathFromApp(opts.appPathPrefix, 'methods', opts.dir, this.fileCase(opts.resourceName) + '.js'),
    context
  );

});
