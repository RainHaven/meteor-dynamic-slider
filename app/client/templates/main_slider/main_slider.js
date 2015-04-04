/*****************************************************************************/
/* MainSlider: Event Handlers */
/*****************************************************************************/
Template.MainSlider.events({
});

/*****************************************************************************/
/* MainSlider: Helpers */
/*****************************************************************************/
Template.MainSlider.helpers({
  templateForRoute: function () {
    var controller = Router.current().lookupOption('dynamic');
    var template = controller.template;
    console.log("template: ", template);
    return {
      template: template
    }
  },
});

/*****************************************************************************/
/* MainSlider: Lifecycle Hooks */
/*****************************************************************************/
Template.MainSlider.created = function () {
};

var EVENTS = 'webkitTransitionEnd oTransitionEnd transitionEnd msTransitionEnd transitionend';

Template.MainSlider.rendered = function () {
  this.firstNode._uihooks = {
    insertElement: function(node, next) {
      $(node)
        .addClass('off-screen')
        .insertBefore(next);

      Meteor.setTimeout(function () {
        $(node).removeClass('off-screen');
      }, 100);

    },
    removeElement: function(node) {
      $(node).addClass('off-screen')
        .on(EVENTS, function() {
          $(node).remove()
        });
    }
  };
};

Template.MainSlider.destroyed = function () {
};
