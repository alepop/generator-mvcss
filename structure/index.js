'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var ModuleGenerator = yeoman.generators.NamedBase.extend({
  files: function () {
    this.template('_structure.sass', 'structures/_' + this.name.toLowerCase() +'.sass');
  },
  addToApplication: function(){
    var path = 'applications.sass',
        file = this.readFileAsString(path),
        targetStr = "//(structures injector)",
        insert = "@import 'structures/" + this.name.toLowerCase() + "'";
    this.write(path, file.replace(targetStr, insert + '\n' + targetStr));
  }
});

module.exports = ModuleGenerator;
