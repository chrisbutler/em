Generator.create({
  name: 'stylesheet',
  usage: 'iron {generate, g}:stylesheet [path/]<name>',
  description: 'Generate a stylesheet',
  examples: [
    'iron g:stylesheet todos/todos_item'
  ]
}, function(args, opts) {
  var destpath = this.pathFromApp(
    'client/stylesheets',
    opts.dir,
    this.fileCase(opts.resourceName)
  );

  var context = {
    name: this.cssCase(opts.resourceName),
  };

  this.template(
    'stylesheet/stylesheet.css',
    destpath + '.css',
    context
  );

  this.template(
    'stylesheet/stylesheet.scss',
    destpath + '.scss',
    context
  );
});
