<%= name %>Controller = RouteController.extend({
  subscriptions: function () {
    <% if (generator.comments) { %>
    // set up the subscriptions for the route and optionally
    // wait on them like this:
    //
    // this.subscribe('item', this.params._id).wait();
    //
    // "Waiting" on a subscription does not block. Instead,
    // the subscription handle is added to a reactive list
    // and when all items in this list are ready, this.ready()
    // returns true in any of your route functions.
    <% } %>
    <% if (generator.samples) { %>
    return this.subscribe('<%= name %>', this.params._id).wait();
    <% } %>
  },

  data: function () {
    <% if (generator.comments) { %>
    // return a global data context like this:
    <% } %>
    <% if (generator.samples) { %>
    return <%= collectionName %>.findOne({_id: this.params._id});
    <% } %>
  },

  action: function () {
    <% if (generator.comments) { %>
    // You can create as many action functions as you'd like.
    // This is the primary function for running your route.
    // Usually it just renders a template to a page. But it
    // might also perform some conditional logic. Override
    // the data context by providing it as an option in the
    // last parameter.
    <% } %>
    <% if (generator.samples) { %>
    this.render('<%= name %>', { /* data: {} */});
    <% } %>
  }
});
