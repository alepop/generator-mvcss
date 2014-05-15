'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var ModuleGenerator = yeoman.generators.NamedBase.extend({
  files: function () {
    this.template('_example_module.sass', 'modules/_' + this.name +'.sass');
  },
  addToApplication: function(){
    var path = 'applications.sass',
        file = this.readFileAsString(path),
        insert = '@import "modules/' + this.name + '"';
    this.write(path, file + insert)
  }
});

module.exports = ModuleGenerator;
