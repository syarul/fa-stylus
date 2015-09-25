# fa-stylus
Stylus port for Font-Awesome 4.4.0, and use icons as your needed. 

## Install

npm install fa-stylus --save

## Initialization

###setup compiler to use fa-stylus

Use gulp, grunt etc, configure your stylus to pipe fa-stylus in 'use', for example with gulp

```javascript
var fontAwesomeStylus = require( "fa-stylus" );

gulp.task('main', function () {
  gulp.src('./templates/stylus/main.styl')
    .pipe(stylus({ 
        use: [
            koutoSwiss(),
            jeet(),
            rupture(),
            fontAwesomeStylus()
        ],
        compress: false 
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(livereload());
});

```
###configure fonts path and import fa-stylus in your project
Move the font folder into your static folder usually 'public' or 'dist', with gulp you can do
```javascript
var filesToMove = [
        './node_modules/fa-stylus/fonts/**/*.*',
    ];

gulp.task('move',['clean'], function(){
  gulp.src(filesToMove)
  .pipe(gulp.dest('public/fonts'));
});
```
Declare font path first before @import to allow compiler to pick up the variable
```styl
$fa-font-path = 'fonts'
@import 'fa-stylus'

```


## Usage

```styl
// icons in the project
.{$fa-css-prefix}-glass
  fa-icon("glass")

.{$fa-css-prefix}-music
  fa-icon("music")

// or import all icons
import-all-icons()
```
