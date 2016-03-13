# fa-stylus

Stylus port of [Font Awesome](https://fortawesome.github.io/Font-Awesome/)
4.5.0,
allowing icons to be selectively chosen
or included all at once.

## Installation

```
npm install fa-stylus --save
```

## Initialization

### Set up compiler to use `fa-stylus`

Use gulp, grunt, or similar and configure your stylus to include `fa-stylus` in the `use` option.
For example, with gulp:

```javascript
var fontAwesomeStylus = require("fa-stylus");

gulp.task('main', function () {
  return gulp.src('./templates/stylus/main.styl')
    .pipe(stylus({
      use: [
        koutoSwiss(),
        jeet(),
        rupture(),
        fontAwesomeStylus(),
      ],
      compress: false,
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(livereload());
});
```

Then import `fa-stylus` in your stylus file.

```styl
@import 'fa-stylus'
```

## Configuration

The variables used by fa-stylus are set by the library only if not already set.
That means to override them you must set them before importing fa-stylus.

See [`variables.styl`](fa-stylus/icons/variables.styl) for full details.

### Font path

The font path is set to `../fonts` by default,
but this may not be suitable for your project.
For example, if the fonts will be available at paths like `/fonts/fontawesome-webfont.woff`,
it can be overridden with stylus code like the following:

```styl
$fa-font-path = '/fonts'
@import 'fa-stylus'
```

The fonts can be moved to this location (usually `public` or `dist`)
as part of your build process;
for example with gulp you can do:

```javascript
var filesToMove = [
  './node_modules/fa-stylus/fonts/**/*.*',
];

gulp.task('move', ['clean'], function () {
  return gulp.src(filesToMove)
    .pipe(gulp.dest('./dist/fonts'));
});
```

As alternative example, if you want the fonts in a subdirectory
and your server follows symlinks, you can do:

```
cd dist/fonts
ln -s ../../node_modules/fa-stylus/fonts font-awesome
```

And then configure `$fa-font-path = '/fonts/font-awesome'` in your stylus.

## Usage

```styl
// Use individual icons
.{$fa-css-prefix}-glass
  fa-icon 'glass'

.{$fa-css-prefix}-music
  fa-icon 'music'

// Or import a list of icons in a loop
.{$fa-css-prefix}
  for $icon in bars bell android
    &-{$icon}
      fa-icon $icon

// Or import all icons
import-all-icons()
```

## Important notes

- The icon `500px` has been renamed to `icon500px`, to work around a parse error
  caused by stylus interpreting it as 500 pixels.
