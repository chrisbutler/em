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

  var config = CurrentConfig.get();

  console.log('method\n', args, opts, config);

  var context = {
    name: path.join(opts.dir, this.fileCase(opts.resourceName)),
    where: opts.where
  };

  var p = this.pathFromApp(opts.appPathPrefix, 'methods', opts.dir + '.js');

  this.template(
    'methods/methods.js',
    p,
    context
  );

  // var destpath = this.rewriteDestinationPathForEngine(p);
  // var content = this.templateContent('methods/methods.js', context);
  //
  // if (config.template.js && config.engines.js == 'coffee') {
  //   this.injectAtEndOfFile(destpath, '\n' + content);
  // } else {
  //   this.injectIntoFile(destpath, '\n' + content);
  // }
});
