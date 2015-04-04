Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  template: 'MainSlider',
  dynamic: {
    template: 'SlideOne'
  },
  name: 'slideOne',
});

Router.route('slide_two', {
  template: 'MainSlider',
  dynamic: {
    template: 'SlideTwo'
  },
  name: 'slideTwo',
});

Router.route('slide_three', {
  template: 'MainSlider',
  dynamic: {
    template: 'SlideThree'
  },
  name: 'slideThree',
});