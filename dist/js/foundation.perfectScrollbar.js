'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** Created by Samuel Moncarey on 13/08/16. */

!function ($) {

    /**
     * PerfectScrollbar module.
     * @module foundation.perfectScrollbar
     */

    var PerfectScrollbar = function () {
        /**
         * Creates a new instance of a PerfectScrollbar.
         * @class
         * @fires PerfectScrollbar#init
         * @param {jQuery} element - jQuery object to attach a perfect-scrollbar to.
         * @param {Object} options - object to extend the default configuration.
         */
        function PerfectScrollbar(element, options) {
            _classCallCheck(this, PerfectScrollbar);

            this.$element = element;
            this.options = $.extend({}, PerfectScrollbar.defaults, this.$element.data(), options);

            this._init();

            Foundation.registerPlugin(this, 'PerfectScrollbar');
        }

        /**
         * Initializes the perfect-scrollbar by setting the creating the tip element, adding it's text, setting private variables and setting attributes on the anchor.
         * @private
         */


        _createClass(PerfectScrollbar, [{
            key: '_init',
            value: function _init() {
                this.$element.perfectScrollbar(this.options);
                this._events();
            }

            /**
             * adds event listeners for the perfect-scrollbar and its anchor
             * @private
             */

        }, {
            key: '_events',
            value: function _events() {
                $(window).on('load', this.load.bind(this));
            }
        }, {
            key: 'load',
            value: function load() {
                if (this.options.initialYPosition !== 'top') {
                    if (!isNaN(this.options.initialYPosition)) {
                        this.$element.scrollTop(this.options.initialYPosition);
                    }
                    if (this.options.initialYPosition == 'bottom') {
                        this.$element.scrollTop(this.$element[0].scrollHeight);
                    }
                }

                if (this.options.initialXPosition !== 'left') {
                    if (!isNaN(this.options.initialXPosition)) {
                        this.$element.scrollLeft(this.options.initialXPosition);
                    }
                    if (this.options.initialXPosition == 'right') {
                        this.$element.scrollLeft(this.$element[0].scrollWidth);
                    }
                }
            }
        }, {
            key: 'view_element',
            value: function view_element($element) {
                if ($.contains(this.$element[0], $element[0])) {
                    var containerDims = Foundation.Box.GetDimensions(this.$element),
                        elementDims = Foundation.Box.GetDimensions($element),
                        top = elementDims.offset.top - containerDims.offset.top,
                        height = elementDims.height;

                    if (this.$element.scrollTop() + elementDims.height < top + height) {
                        this.$element.scrollTop(top + height - elementDims.height);
                    }

                    if (this.$element.scrollTop() < top) {
                        this.$element.scrollTop(top);
                    }
                }
            }

            /**
             * Destroys an instance of perfect-scrollbar, removes template element from the view.
             * @function
             */

        }, {
            key: 'destroy',
            value: function destroy() {
                this.$element.perfectScrollbar('destroy');
                Foundation.unregisterPlugin(this);
            }
        }]);

        return PerfectScrollbar;
    }();

    PerfectScrollbar.defaults = {
        handlers: ['click-rail', 'drag-scrollbar', 'keyboard', 'wheel', 'touch'],
        wheelSpeed: 1,
        wheelPropagation: false,
        swipePropagation: true,
        minScrollbarLength: null,
        useBothWheelAxes: false,
        suppressScrollX: false,
        suppressScrollY: false,
        scrollXMarginOffset: 0,
        scrollYMarginOffset: 0,
        initialXPosition: 'left',
        initialYPosition: 'top',
        stopPropagationOnClick: true,
        theme: 'foundation'
    };

    // Window exports
    Foundation.plugin(PerfectScrollbar, 'PerfectScrollbar');
}(jQuery);