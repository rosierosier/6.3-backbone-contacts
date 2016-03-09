console.log("Hello Views!");
var handlebars = require('handlebars');
var $ = require('jquery');
var handlebars = require('handlebars');
var Backbone = require('backbone');
var models = require('../models/contacts');
var _ = require('underscore');

// var contactSource = $('#address-book').html();
// var contactTemplate = handlebars.compile(contactSource);
var Contact = Backbone.View.extend({
  el: '.contact-list',
  tagName: "ul",
  className: "contact-list",
  template: _.template($('#address-book').html()),
  events: {
  },
  initialize: function(){
    this.listenTo(this.collection, "add", this.render);
  },
  complete: function(){
  },
  render: function(){
    console.log(this.$el);
    this.$el.empty().append(this.template);
    return this;
  }
});

var contact = new Contact();
contact.render();

module.exports = Contact;
