console.log("Hello Models!");
var handlebars = require('handlebars');
var $ = require('jquery');
var Backbone = require('backbone');

var Contact = Backbone.Model.extend({

});

var ContactCollection = Backbone.Collection.extend({
  model: Contact,
  input: function(data){
    this.add(data);
    return data;
  }
});

module.exports = {
  'Contact': Contact,
  'ContactCollection': ContactCollection
}
