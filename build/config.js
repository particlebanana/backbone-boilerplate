// This is the main Backbone Boilerplate build configuration file.
//
// This is a JavaScript file, you can define any functions you would like in
// here.
config.init({

  lint: {
    files: ["build/config.js", "app/**/*.js"]
  },

  concat: {

    // The core library files
    "dist/debug/js/libs.js": [
      "assets/js/libs/jquery.js",
      "assets/js/libs/underscore.js",
      "assets/js/libs/backbone.js"
    ],

    "dist/debug/js/yepnope.js": "assets/js/libs/yepnope.js",

    // Application files
    "dist/debug/js/app.js": ["app/namespace.js", "app/modules/**/*.js", "app/index.js"],

    // Vendor CSS Files
    "dist/debug/css/vendor.css": [
      "assets/css/vendor/boilerplate.css"
    ]
  },

  hogan: {
    'dist/debug/js/templates.js': 'app/templates/**/*.html'
  },

  stylus: {
    'dist/debug/css/app.css': 'assets/css/*.styl'
  },

  min: {
    "dist/release/js/yepnope.js": ["dist/debug/js/yepnope.js"],
    "dist/release/js/libs.js": ["dist/debug/js/libs.js"],
    "dist/release/js/app.js": ["dist/debug/js/app.js"],
    "dist/release/js/templates.js": ["dist/debug/js/templates.js"]
  },

  mincss: {
    "dist/release/css/app.css": ["dist/debug/css/app.css"],
    "dist/release/css/vendor.css": ["dist/debug/css/vendor.css"]
  },

  // Only watch templates and .styl files in development
  watch: {
    files: ['app/templates/**/*.html', 'assets/css/**/*.styl'],
    tasks: "hogan stylus"
  },

  clean: {
    folder: "dist/"
  }

});

// Run the following tasks...
task.registerTask("default", "clean lint:files concat hogan stylus min mincss");
