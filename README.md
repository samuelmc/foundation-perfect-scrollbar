# foundation-perfect-scrollbar
**[Perfect Scrollbar](https://github.com/noraesae/perfect-scrollbar) as a Foundation plugin**

## Installation

**With bower:**

[![Bower](https://img.shields.io/bower/v/foundation-perfect-scrollbar.svg)]()

```shell
bower install foundation-perfect-scrollbar
```
Add all nessesary files to your html. This plugin only works with foundation and requires momnetjs, mustache.js and either font-awesome or foundation-icons.
```html
<link rel="stylesheet" type="text/css" href="bower_components/foundation-sites/dist/foundation.min.css">
<link rel="stylesheet" type="text/css" href="bower_components/perfect-scrollbar/css/perfect-scrollbar.min.css">
...
<script src="bower_components/jquery/dist/jquery.min.js"></script>
<script src="bower_components/perfect-scrollbar/js/perfect-scrollbar.jquery.min.js"></script>
<script src="bower_components/foundation-sites/dist/foundation.min.js"></script>
<script src="bower_components/foundation-perfect-scrollbar/dist/js/foundation.perfectScrollbar.min.js"></script>
```

If you are using foundation's scss with gulp, the best way add the styles is by adding it to the sass paths in your gulpfile.
```js
var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/perfect-scrollbar/src/css'
];

gulp.task('sass', function() {
    ...

```
Include the perfect-scrollbar main.scss file
```scss
@include "main";
```
Then add these settings to your _settings.scss file for customization
```scss
// Colors
$ps-border-radius: 6px;

$ps-rail-default-opacity: 0;
$ps-rail-container-hover-opacity: 0.6;
$ps-rail-hover-opacity: 0.9;

$ps-bar-bg: transparent;
$ps-bar-container-hover-bg: #aaa;
$ps-bar-hover-bg: #999;
$ps-rail-hover-bg: #eee;

// Sizes
$ps-scrollbar-x-rail-bottom: 0px;
$ps-scrollbar-x-rail-height: 15px;
$ps-scrollbar-x-bottom: 2px;
$ps-scrollbar-x-height: 6px;
$ps-scrollbar-x-hover-height: 11px;

$ps-scrollbar-y-rail-right: 0;
$ps-scrollbar-y-rail-width: 15px;
$ps-scrollbar-y-right: 2px;
$ps-scrollbar-y-width: 6px;
$ps-scrollbar-y-hover-width: 11px;

```

## Usage
**Basic html**
```html
<div data-perfect-scrollbar>
<!-- Scrollable content -->
</div>
```

Run foundation and it will automaticaly initialize all the scroll containers
```js
$(document).foundation();
```

## Licence
[![MIT Licence](https://img.shields.io/badge/Licence-MIT-blue.svg)](https://opensource.org/licenses/mit-license.php)

&copy; Samuel Moncarey

[![Donate via paypal](https://img.shields.io/badge/Paypal-donate-blue.svg)](https://www.paypal.me/samuelmc/5 "Consider donation")
