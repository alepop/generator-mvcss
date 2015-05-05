'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var MvcssGenerator = yeoman.generators.Base.extend({
  constructor: function() {
    yeoman.generators.Base.apply(this, arguments);
    this.argument('appname', { type: String, required: false });
    this.appname = this.appname || path.basename(process.cwd());
  },
  init: function() {
    this.pkg = require('../package.json');

    this.on('end', function() {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  projectFolders: function() {
    this.mkdir('foundation');
    this.mkdir('components');
    this.mkdir('structures');
    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
  },

  projectFiles: function() {
    this.template('_application.sass', 'applications.sass');
    this.directory('foundation', 'foundation')
    this.directory('components', 'components')
  }
});

module.exports = MvcssGenerator;
