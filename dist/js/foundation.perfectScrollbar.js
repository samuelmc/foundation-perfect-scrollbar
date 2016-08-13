/**
 * Created by samuel on 13/08/16.
 */

!function($) {

    /**
     * PerfectScrollbar module.
     * @module foundation.perfectScrollbar
     */

    class PerfectScrollbar {
        /**
         * Creates a new instance of a PerfectScrollbar.
         * @class
         * @fires PerfectScrollbar#init
         * @param {jQuery} container - jQuery object to attach a perfect-scrollbar to.
         * @param {Object} options - object to extend the default configuration.
         */
        constructor(container, options) {
            this.$container = container;
            this.options = $.extend({}, PerfectScrollbar.defaults, this.$container.data(), options);

            this._init();

            Foundation.registerPlugin(this, 'PerfectScrollbar');
        }

        /**
         * Initializes the perfect-scrollbar by setting the creating the tip element, adding it's text, setting private variables and setting attributes on the anchor.
         * @private
         */
        _init() {
            this.$container.perfectScrollbar(this.options);

            if (this.options.initialYPosition !== 'top') {
                if (!isNaN(this.options.initialYPosition)) {
                    this.$container.scrollTop(this.options.initialYPosition);
                }
                if (this.options.initialYPosition == 'bottom') {
                    this.$container.scrollTop(this.$container[0].scrollHeight);
                }
            }

            if (this.options.initialXPosition !== 'left') {
                if (!isNaN(this.options.initialXPosition)) {
                    this.$container.scrollLeft(this.options.initialXPosition);
                }
                if (this.options.initialXPosition == 'right') {
                    this.$container.scrollLeft(this.$container[0].scrollWidth);
                }
            }

            this._events();
        }

        /**
         * adds event listeners for the perfect-scrollbar and its anchor
         * @private
         */
        _events() {

        }

        /**
         * Destroys an instance of perfect-scrollbar, removes template element from the view.
         * @function
         */
        destroy() {
            this.$container.perfectScrollbar('destroy');
            Foundation.unregisterPlugin(this);
        }
    }

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
        theme: 'default'
    };

    // Window exports
    Foundation.plugin(PerfectScrollbar, 'PerfectScrollbar');

}(jQuery);
