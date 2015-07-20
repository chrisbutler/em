Meteor.publish('<%= name %>', function () {
  return <%= collectionName %>.find();
});
