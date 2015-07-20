#***************************************************************************
# Client and Server Methods
#***************************************************************************

Meteor.methods
  '<%= name %>': ->
    if @isSimulation
      # do some client stuff while waiting for
      # result from server.
    else
    return
