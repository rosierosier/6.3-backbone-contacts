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
  tagName: "ul",
  className: "contact-list",
  template: handlebars.compile($('#address-book').html()),
  events: {
  },
  initialize: function(){
    this.listenTo(this.collection, "add", this.render);
  },
  complete: function(){
  },
  render: function(contact){
    console.log('rendering');
    this.$el.empty().append(this.template(contact.toJSON()));
    return this;
  }
});

//var contact = new Contact();
//contact.render();

module.exports = Contact;
