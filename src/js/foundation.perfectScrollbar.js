/** Created by Samuel Moncarey on 13/08/16. */

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
         * @param {jQuery} element - jQuery object to attach a perfect-scrollbar to.
         * @param {Object} options - object to extend the default configuration.
         */
        constructor(element, options) {
            this.$element = element;
            this.options = $.extend({}, PerfectScrollbar.defaults, this.$element.data(), options);

            this._init();

            Foundation.registerPlugin(this, 'PerfectScrollbar');
        }

        /**
         * Initializes the perfect-scrollbar by setting the creating the tip element, adding it's text, setting private variables and setting attributes on the anchor.
         * @private
         */
        _init() {
            this.$element.perfectScrollbar(this.options);
            this._events();
        }

        /**
         * adds event listeners for the perfect-scrollbar and its anchor
         * @private
         */
        _events() {
            $(window).on('load', this.load.bind(this));
        }

        load() {
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

        view_element($element) {
            if ($.contains(this.$element[0], $element[0])) {
                const containerDims = Foundation.Box.GetDimensions(this.$element),
                    elementDims = Foundation.Box.GetDimensions($element),
                    top = elementDims.offset.top - containerDims.offset.top,
                    height = elementDims.height;
                console.log(this.$element.scrollTop(), top, 'initial');

                if (this.$element.scrollTop() + elementDims.height < top + height) {
                    console.log(this.$element.scrollTop(), elementDims.height > top + height, 'down');
                    this.$element.scrollTop(top + height - elementDims.height);
                }

                if (this.$element.scrollTop() > top) {
                    console.log(this.$element.scrollTop(), top, 'up');
                    this.$element.scrollTop(top);
                }

                console.log(this.$element.scrollTop(), top, 'result');
            }
        }

        /**
         * Destroys an instance of perfect-scrollbar, removes template element from the view.
         * @function
         */
        destroy() {
            this.$element.perfectScrollbar('destroy');
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
        theme: 'foundation'
    };

    // Window exports
    Foundation.plugin(PerfectScrollbar, 'PerfectScrollbar');

}(jQuery);
