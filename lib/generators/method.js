var path = require('path');

var MethodGenerator = Generator.create({
  name: 'method',
  aliases: ['m'],
  usage: 'iron {generate, g}:{method, m} <name> [--where]',
  description: 'Generate scaffolding for a Method.',
  examples: [
    'iron g:method todos --both'
  ]
}, function (args, opts) {

  var context = {
    name: this.classCase(opts.resourceName),
    where: opts.where
  };

  this.template(
    'methods/methods.js',
    this.pathFromApp(opts.appPathPrefix, 'methods', opts.dir, this.fileCase(opts.resourceName) + '.js'),
    context
  );

});
