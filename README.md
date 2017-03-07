# foundation-perfect-scrollbar
**[Perfect Scrollbar](https://github.com/noraesae/perfect-scrollbar) plugin for Foundation 6**

[![Travis](https://img.shields.io/travis/samuelmc/foundation-perfect-scrollbar.svg)](https://travis-ci.org/samuelmc/foundation-perfect-scrollbar)

## Installation

**With bower:**

[![Bower](https://img.shields.io/bower/v/foundation-perfect-scrollbar.svg)]()

```shell
bower install foundation-perfect-scrollbar
```
Add all nessesary files to your html. This plugin only works with foundation and requires perfect-scrollbar.
```html
<link rel="stylesheet" type="text/css" href="bower_components/foundation-sites/dist/css/foundation.min.css">
<link rel="stylesheet" type="text/css" href="bower_components/foundation-perfect-scrollbar/dist/css/foundation-perfect-scrollbar.min.css">
...
<script src="bower_components/jquery/dist/jquery.js"></script>
    <script src="bower_components/what-input/dist/what-input.js"></script><script src="bower_components/perfect-scrollbar/js/perfect-scrollbar.jquery.min.js"></script>
    <script src="bower_components/foundation-sites/dist/js/foundation.min.js"></script>
    <script src="bower_components/foundation-perfect-scrollbar/dist/js/foundation.perfectScrollbar.min.js"></script>
```

If you are using foundation's scss with gulp, the best way add the styles is by adding it to the sass paths in your gulpfile.
```js
var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

var sassPaths = [
    'bower_components/normalize.scss/sass',
    'bower_components/foundation-sites/scss',
    'bower_components/foundation-perfect-scrollbar/src/scss/plugin',
    'bower_components/motion-ui/src'
];

gulp.task('sass', function() {
    ...

```
Include the foundation-perfect-scrollbar.scss file
```scss
@import "foundation-perfect-scrollbar";
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

**Plugin options**

|Name     |Default  |Descrition|
|---------|---------|----------|
|handlers|`['click-rail', 'drag-scrollbar', 'keyboard', 'wheel', 'touch']`|It is a list of handlers to use to scroll the element.|
|wheelSpeed|`1`|The scroll speed applied to mousewheel event.|
|wheelPropagation|`false`|If this option is true, when the scroll reaches the end of the side, mousewheel event will be propagated to parent element.|
|swipePropagation|`true`|If this option is true, when the scroll reaches the end of the side, touch scrolling will be propagated to parent element.|
|minScrollbarLength|`null`|When set to an integer value, the thumb part of the scrollbar will not shrink below that number of pixels.|
|maxScrollbarLength|`null`|When set to an integer value, the thumb part of the scrollbar will not expand over that number of pixels.|
|useBothWheelAxes|`false`|When set to true, and only one (vertical or horizontal) scrollbar is visible then both vertical and horizontal scrolling will affect the scrollbar.|
|suppressScrollX|`false`|When set to true, the scroll bar in X axis will not be available, regardless of the content width.|
|suppressScrollY|`salse`|When set to true, the scroll bar in Y axis will not be available, regardless of the content height.|
|scrollXMarginOffset|`0`|The number of pixels the content height can surpass the container height without enabling the Y axis scroll bar. Allows some "wiggle room" or "offset break", so that Y axis scroll bar is not enabled just because of a few pixels.|
|initialXPosition|`'left'`|Automaticaly scroll the content to an initial position, this can the number of px to scroll to or the strings `'left'` or `'right'`.|
|initialYPosition|`'top'`|Automaticaly scroll the content to an initial position, this can the number of px to scroll to or the strings `'top'` or `'bottom'`.|
|stopPropagationOnClick|`true`|When set to false, when clicking on a rail, the click event will be allowed to propagate.|
|theme|`'foundation'`|A string. It's a class name added to the container element. The class name is prepended with `ps-theme-`. So default theme class name is `ps-theme-foundation`. In order to create custom themes with scss use the `ps-container($theme)` mixin, where `$theme` is an scss map.

## Licence
[![MIT Licence](https://img.shields.io/badge/Licence-MIT-blue.svg)](https://opensource.org/licenses/mit-license.php)

&copy; Samuel Moncarey 2016
