Template.MasterLayout.helpers({
  isActiveClass: function (routeName) {
    var currentRoute = Router.current().route.getName();
    return (routeName === currentRoute) ? 'active' : '';
  },
});

Template.MasterLayout.events({
});
