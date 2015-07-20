/*****************************************************************************/
/* Client and Server Methods */
/*****************************************************************************/

Meteor.methods({
  '<%= name %>': function () {
    if (this.isSimulation) {
      // do some client stuff while waiting for
      // result from server.
    }
  }
});
