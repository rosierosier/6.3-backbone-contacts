console.log("Hello Views!");
var handlebars = require('handlebars');
var $ = require('jquery');
var handlebars = require('handlebars');
var Backbone = require('backbone');
var models = require('../models/contacts');


var contactSource = $('#contacts').html();
var contactTemplate = handlebars.compile(contactSource);
var Contact = Backbone.View.extend({
  tagName: "ul",
  className: "container",
  template: contactTemplate,

  events: {
  },
  initialize: function(){
    // this.listenTo(this.collection, "add", this.render);
  },
  complete: function(){
  },
  render: function(){
    // this.$el.html(this.template(this.collection.toJSON));
    return this;
  }
});

var contact = new Contact;
contact.render();

module.exports = Contact;
